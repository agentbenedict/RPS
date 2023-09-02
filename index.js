/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ROCK PAPER SCISSORS GAME WITH HTML, CSS AND JAVASCRIPT...
		
		BY BEN.AIDEV
		
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
			
//	Global Variables Declaration

	let home = document.querySelector(".home_filter");
	let load = document.querySelector(".load_sec");
	let activity = document.querySelector(".activity_sec");
	let lastLoad = document.querySelector(".last_load_sec");
	let exitBtn = document.querySelector("#cancel_btn");
	let howBtn = document.querySelector("#how_btn");
	let help = document.querySelector("#help");
	
	
//	Board For Displaying Scores

	let computerBoard = document.querySelector("#computer_score");
	let playerBoard = document.querySelector("#player_score");

//	Board For Displaying Session Winner

	let sessionBoard = document.querySelector("#winner_board");
	
//	Board To Display Round 

	let roundBoard = document.querySelector("#round_board");
	
//	Round

	let roundNumber = document.querySelector("#round_number");
	
	

	function preLoad(){
				
			
			function displayHome(){
				
				home.style.display = "flex";
				load.style.display = "none";
				activity.style.display = "none";
				roundBoard.style.display = "none";
				lastLoad.style.display = "none";
				
				displayLoading();
				
			}
			
			function displayLoading(){
				
		//	Play Button (Try)		

				let playBtn = document.querySelector("#play_btn");
				
		//	Load Dots

				let dot1 = document.querySelector("#dot1");
				let dot2 = document.querySelector("#dot2");
				let dot3 = document.querySelector("#dot3");
				
		//	Event Listener For Click On Play Button

				playBtn.addEventListener("click", () => {
					
					
		//	Display Page Then Load Dots

					home.style.display = "none";
					load.style.display = "flex";
					activity.style.display = "none";
					roundBoard.style.display = "none";
					lastLoad.style.display = "none";
					
		//	Initial Display Of Dots Set To None

					dot1.style.display = "none";
					dot2.style.display = "none";
					dot3.style.display = "none";

		// SetTimeout For Each Dot To Display

					setTimeout(()=> {
						dot1.style.display = "flex";
					},1000);
					
					setTimeout(()=> {
						dot2.style.display = "flex";
					},2000);
					
					setTimeout(()=> {
						dot3.style.display = "flex";
					},3000);
					
					displayActivitySession();
			
				})
				
			}
			
			function displayActivitySession(){

							setTimeout(()=> {
								home.style.display = "none";
								load.style.display = "none";
								activity.style.display = "flex";
								roundBoard.style.display = "none";
								lastLoad.style.display = "none";
								help.style.display = "none";
								
								setGamePlay();
								
							},4000)
						
						howBtn.addEventListener("mouseover", ()=>{
			
							help.style.display = "block";
			
						})
						howBtn.addEventListener("mouseout", ()=>{
			
							help.style.display = "none";
			
						})
						
						playSong("Dave_ft_Central_Cee_-_Sprinter.mp3");
			}
			
			
			
			//	Function To Start Program Run
			
			displayHome();
	}
	
	function setGamePlay(){
		
			//	Function Variables 

		//	Icons
		
			let playerIcon = document.querySelector("#player_icon");
			let computerIcon = document.querySelector("#computer_icon");
			
		//	Options
			
			let rockOption = document.querySelector("#rock_option");
			let paperOption = document.querySelector("#paper_option");
			let scissorsOption = document.querySelector("#scissors_option");
		
		//	Scores
		
			let computerScore = 0;
			let playerScore = 0;
		
		//	Inactive Icons
		
			playerIcon.src = "rock.png";
			computerIcon.src = "rock.png";
			
			
		//	Display Winner Board 
		
			sessionBoard.style.display = "none";
			
		//	Choices
		
			let player;
			let computer;
		
		//	Winner 
		
			let winner;
		
	//	Arrays

		//	Choices
		
			let availableChoices = ["ROCK", "PAPER", "SCISSORS"];
			
		//	Options
		
			let playerOptions = [rockOption, paperOption, scissorsOption];
		
		//	Icons
		
			let availableIcons = ["rock.png", "paper.png", "scissors.png"];
			
			
		//	 Round
		
			let round = 1;
		
			
		function makeChoice(){
			
				setTimeout(roundsBoard, 100);
				
				
			
				for(let i = 0; i < playerOptions.length; i++) {
					
					//	Player Option Event Handler 
					
					playerOptions[i].addEventListener("click", () => {
						
							
							function floatIcons() {
								playerIcon.classList.add("float");
								computerIcon.classList.add("float");
							}
							
							function unfloatIcons() {
								playerIcon.classList.remove("float");
								computerIcon.classList.remove("float");
							}
							
							setTimeout(floatIcons, 200);
							setTimeout(unfloatIcons, 1700);
							
							setTimeout(()=>{
							
									//	Player Icon Update
									
										playerIcon.src = availableIcons[i];
										
									//	Player Choice Update
									
										player = availableChoices[i];
										
										
								//	Generate Random Number To Assist In Computer Choice Making
						
								//	Update Computer Choice
							
								let random = Math.floor(Math.random() * availableChoices.length	+ 1);
								
								computer = availableChoices[random - 1];

										
								//	Update Computer Icon
							
								if(computer == "ROCK"){
									
											computerIcon.src = "rock.png";
											
								} else if(computer == "PAPER") {
									
										computerIcon.src = "paper.png";
								}
								else {
									
										computerIcon.src = "scissors.png";
										
								}
								
								checkWinner();
								
								setTimeout(updateWinner, 1000);
								
							},1800);
					})
					
				}
				
				
			}
			
			makeChoice();
			
			
	//	Function To Determine Winner
			
			function checkWinner() {
				
				//	Checking Conditions For Winner To Be Declared
			
						if (player == "ROCK" && computer == "PAPER"){
						
							winner = "COMPUTER";
							
						} else if (player == "PAPER" && computer == "ROCK"){
							
							winner = "YOU";
							
						} else if (player == "PAPER" && computer == "SCISSORS"){
							
							winner = "COMPUTER";
							
						} else if (player == "SCISSORS" && computer == "PAPER"){
							
							winner = "YOU";
							
						} else if (player == "ROCK" && computer == "SCISSORS"){
							
							winner = "YOU";
							
						} else if (player == "SCISSORS" && computer == "ROCK"){
							
							winner = "COMPUTER";
							
						} else if(player == computer) {
							
							winner = "BOTH";
		
						}
						
						
						//	Display The Winner On Session Board
						
						sessionBoard.textContent = `${winner} WON !`;
						
						
					//	Updating The Score Board From Results Gotten From The Conditioning
					
						if(winner == "COMPUTER"){
							
							computerScore += 1;
							computerBoard.textContent = computerScore;
							
						} else if (winner == "YOU"){
							
							playerScore += 1;
							playerBoard.textContent = playerScore;
						
						}
						
						//	Reset Round If Any Player Has A Total Of 10 Points
						
						
						if(playerScore == 10 || computerScore == 10){
							
						//	Updating The Round Value
						
							round += 1;
							
							
							computerBoard.textContent = 0;
							playerBoard.textContent = 0;
							
						//	Scores Reset
						
							playerScore = 0;
							computerScore = 0;
							
						//	Round Board Display
						
							setTimeout(roundsBoard, 1000);
					
						}
						
					
		}
		
		//	Function To Show The Winner Of Each Session Play
		
		function updateWinner() {
						
						//	Board Active
						
						function openBoard(){
							
							sessionBoard.style.display = "grid";
							
						}
						
						//	Board Inactive
						
						function closeBoard(){
							
							sessionBoard.style.display = "none";
						
						}
						
				openBoard();
				
				setTimeout(closeBoard, 1000);
				
				setTimeout(resetIcon, 1500);
					
		}
			
		
		//	Function To Reset The Icon Value To Default After Each Session
		
		function resetIcon(){
			
			computerIcon.src = "rock.png";
			playerIcon.src = "rock.png";
			
		}
		
		
		//	Function To Display The Each Round On Board
		
		function roundsBoard(){
			
			//	Assigning round to Text Content Of Round Number (span) 
			
			roundNumber.textContent = round;
			
			//	Round Board Active
			
			function openRoundBoard(){
				
				roundBoard.style.display = "flex";
			}
			
			//	Round Board Inactive
			
			function closeRoundBoard(){
				
				roundBoard.style.display = "none";
				
			}
			
			setTimeout(openRoundBoard,1000);
			setTimeout(closeRoundBoard,2000);
		}
	}
		
		

	// 	Function To Terminate Game Play
	
	
	function exitGamePlay(){
		exitBtn.addEventListener("click", () => {
	
			setTimeout(()=> {
				home.style.display = "none";
				load.style.display = "none";
				activity.style.display = "none";
				lastLoad.style.display = "flex";
			
			},500);
			
			
			setTimeout(preLoad, 3000);
			setTimeout(reloadPage, 4000);
		})
		
		
		
	}
	
	function reloadPage(){
		location.reload();
	}
	
	function playSong(audioName){
		let audio = new Audio(audioName);
		audio.loop = true;
		audio.play();
		
	}
	
	
//	Full Process Initiation;
	
function RPS_MOD () {
	
	preLoad();
	exitGamePlay();

}


RPS_MOD();
