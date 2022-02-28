import React from 'react'
import { useState } from 'react'
import profileStyles from './Profile.module.css'
import IconButton from '@mui/material/IconButton'
import { Paper, Button } from '@mui/material'
import { MdAddBox } from 'react-icons/md'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogActions } from '@mui/material'
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';



const Profile = () => {
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});
	const [open, setOpen] = useState(false);
	const [file,setFile] = useState();
	const [alert, setAlert] = useState({pop:false, message:''});
	const [name , setName] = useState('');
	const [userDetails, setUserDetails] = useState({
		userName: 'Bishal Chettri',
		userEmail: 'bishal@gmail.com',
		userPhone: '1234567890',
		userAddress: 'Kadamtala, Siliguri'
	})
	const { userName, userEmail, userPhone, userAddress } = userDetails

	const handleOnChange = (e) => {
		setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
	}

	const handleProfileDialog = () => {
		console.log('handleProfileDialog')
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const fileChangeHandler = (e) => {
		setFile(e.target.files[0]);
		console.log(e.target.files[0])
		setAlert({pop:true, message:`${e.target.files[0].name} Added`})

		
	}

	const handleSave = () =>{
		const formData = new FormData();
		formData.append('file', file);
		fetch('/api/uploads',{
			method: 'POST',
			body: formData,
		}).then((res)=>{
			console.log(res,'res')
			handleClose()
			setAlert({pop:false, message:''});
			setName(file.name)
			localStorage.setItem('name', file.name)
			
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	}

	const BasicAlert = (props) => {
		return (
			<Alert severity={props.severity}>{props.message}</Alert>
		)
	}

	const ProfileAddDialog = ({ open, handleClose, Transition }) => {
		return (
			<Dialog onClose={handleClose} open={open} fullWidth={true} TransitionComponent={Transition}>
				<Paper>
				{alert.pop && <BasicAlert severity="success" message={alert.message}/> }
					<DialogTitle style={{fontWeight:"bold"}}>Profile Image</DialogTitle>
					<DialogContent>
						<span className={profileStyles.btnFile}>
						Upload<input type="file" onChange={fileChangeHandler}/>
						</span>
					</DialogContent>
					<DialogActions>
						<Button color="error" onClick={handleClose}>Cancel</Button>
						<Button color="success" onClick={handleSave}>Save</Button>
					</DialogActions>
				</Paper>
			</Dialog>

		)
	}

	React.useEffect(() => {
		if(localStorage.getItem('name')){
			setName(localStorage.getItem('name'))
		}
	},[])



	return (
		<div className={profileStyles.wrapper}>
			{/* Background Cover */}
			<div className={profileStyles.bgCover} />
			{/* Profile Image */}
			<div className={profileStyles.profileImgWrapper}>
				<img src={name?.length > 0 ? `/uploads/${name}` : "/uploads/city-gd338df2bf_1920.jpg"} className={profileStyles.profileImg} alt="profile image" />
				<IconButton
					color='success'
					size='large'
					sx={{ p: 0 }}
					onClick={() => handleProfileDialog()}
				>
					<MdAddBox />
				</IconButton>
				{open && <ProfileAddDialog
					open={open}
					handleClose={handleClose}
					Transition={Transition}
				/>}
				
			</div>
			{/* Input Form */}
			<form className={profileStyles.form}>
				<label className={profileStyles.inputLabel}>Enter Name</label>
				<input
					className={profileStyles.inputField}
					name="userName"
					type="text"
					value={userName}
					onChange={handleOnChange}
				/>

				<label className={profileStyles.inputLabel}>Enter Email</label>
				<input
					className={profileStyles.inputField}
					name="userEmail"
					type="email"
					value={userEmail}
					onChange={handleOnChange}
				/>

				<label className={profileStyles.inputLabel}>Enter Phone</label>
				<input
					className={profileStyles.inputField}
					name="userPhone"
					type="text"
					value={userPhone}
					onChange={handleOnChange}
				/>

				<label className={profileStyles.inputLabel}>Enter Address</label>
				<input
					className={profileStyles.inputField}
					name="userAddress"
					type="text"
					value={userAddress}
					onChange={handleOnChange}
				/>
				<button className="btn displayBlock btn-large btn-primary">Save</button>
			</form>

		</div>
	)
}


export default Profile