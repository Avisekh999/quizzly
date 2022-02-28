import leaderboardStyles from './Leaderboard.module.css'

const Leaderboard = () => {
  return (
		<div className={leaderboardStyles.wrapper}>
			{/* == Top Three Winners == */}
			<div className={leaderboardStyles.topThree}>
				<div className={`${leaderboardStyles.winnerCard} ${leaderboardStyles.winnerSecond}`}>
					<img className={leaderboardStyles.winnerCardImg} src="/profile.jpg" />
					<span className={leaderboardStyles.winnerPosition}>2</span>
					<span className={leaderboardStyles.winnerName}>John Doe</span>
					<span className={leaderboardStyles.highlightText}>29 Questions</span>
					<span className={leaderboardStyles.lightText}>6m 25s</span>
				</div>
				<div className={`${leaderboardStyles.winnerCard} ${leaderboardStyles.winnerFirst}`}>
					<img className={leaderboardStyles.winnerCardImg} src="/profile.jpg" />
					<span className={leaderboardStyles.winnerPosition}>1</span>
					<span className={leaderboardStyles.winnerName}>Kevin Smith</span>
					<span className={leaderboardStyles.highlightText}>30 Questions</span>
					<span className={leaderboardStyles.lightText}>5m</span>
				</div>
				<div className={`${leaderboardStyles.winnerCard} ${leaderboardStyles.winnerThird}`}>
					<img className={leaderboardStyles.winnerCardImg} src="/profile.jpg" />
					<span className={leaderboardStyles.winnerPosition}>3</span>
					<span className={leaderboardStyles.winnerName}>Jane Doe</span>
					<span className={leaderboardStyles.highlightText}>27 Questions</span>
					<span className={leaderboardStyles.lightText}>6m 18s</span>
				</div>
			</div>
			{/* == Top 10 Winners == */}
			<div className={leaderboardStyles.topTen}>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>4</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Priyat Tamang</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>25 Questions</span>
						<span className={leaderboardStyles.userTime}>10m 12s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>5</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Avishek Gurung</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>24 Questions</span>
						<span className={leaderboardStyles.userTime}>10m 13s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>6</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Bishal Chettri</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>23 Questions</span>
						<span className={leaderboardStyles.userTime}>11m 27s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>7</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Priyat Tamang</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>25 Questions</span>
						<span className={leaderboardStyles.userTime}>10m 12s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>8</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Avishek Gurung</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>24 Questions</span>
						<span className={leaderboardStyles.userTime}>10m 13s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>9</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Bishal Chettri</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>23 Questions</span>
						<span className={leaderboardStyles.userTime}>11m 27s</span>
					</div>
				</div>
				<div className={leaderboardStyles.userCard}>
					<span className={leaderboardStyles.userRank}>10</span>
					<img className={leaderboardStyles.userImg} src="/profile.jpg" />
					<div className={leaderboardStyles.userText}>
						<span className={leaderboardStyles.userName}>Bishal Chettri</span>
						<span className={leaderboardStyles.userAttemptedQuestions}>23 Questions</span>
						<span className={leaderboardStyles.userTime}>11m 27s</span>
					</div>
				</div>
			</div>
		</div>
  )
}
export default Leaderboard
