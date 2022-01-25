//componente react
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
function GlobalStyle() {
	return (
		<style global jsx>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}
			body {
				font-family: 'Roboto', sans-serif; ;
			}
			/* App fit Height */
			html,
			body,
			#__next {
				min-height: 100vh;
				display: flex;
				flex: 1;
			}
			#__next {
				flex: 1;
			}
			#__next > * {
				flex: 1;
			}
			/* ./App fit Height */
		`}</style>
	);
}

function Title(props) {
	console.log(props);
	const Tag = props.tag || 'h1' // tag pode ser h1, h2, h3, p etc
	return (
		<>
			<Tag>{props.children}</Tag> {/*children é o conteudo do componente*/}
			<style jsx>{`
				${Tag} {
					font-size: 1.5rem;
					color: ${appConfig.theme.colors.neutrals['000']};
		
					
				}
			`}</style>
		</>
	);
}


// function HomePage() {
//     return (
//     <div>
//         <GlobalStyle/>
//         <Titulo tag='h1'>Bem vindo de volta!</Titulo> {/* tag pode ser h1, h2, h3, p etc */}
//         <h3>Seu chatcord</h3>

//         <style jsx>{`
//         h1 {
//           margin: 50px;
//           color: blue;
//         }
//       `}</style>
//     </div>

//     );

//   }

//   export default HomePage

export default function PaginaInicial() {
	const username = "filipeoliveira93";

	return (
		<>
			<GlobalStyle />
			<Box
				styleSheet={{
          
					display: "flex",
					alignItems: "center",
					justifyContent: "left",
					backgroundColor: appConfig.theme.colors.primary[100],
					backgroundImage:
						"url(https://w.wallhaven.cc/full/39/wallhaven-399d66.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}>
				<Box
					styleSheet={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: {
							xs: "column",
							sm: "row",
						},
						width: "100%",
						maxWidth: "600px",
						borderRadius: "10px",
            height: "200px",
						padding: "32px",
						margin: "60px",
            marginTop: "-200px",
						boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
						backgroundColor: appConfig.theme.colors.neutrals[900],
            
					}}>
					{/* Formulário */}
					<Box
						as="form"
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: { xs: "100%", sm: "50%" },
							textAlign: "center",
							marginBottom: "16px",
						}}>
						<Title tag="h1" >Boas vindas de volta!</Title>
						<Text
							variant="body3"
							styleSheet={{
								marginBottom: "20px",
								color: appConfig.theme.colors.neutrals[400],

                
							}}>
							{appConfig.name}
						</Text>

						<TextField
							fullWidth
							textFieldColors={{
								neutral: {
									textColor: appConfig.theme.colors.neutrals[200],
									mainColor: appConfig.theme.colors.neutrals[500],
									mainColorHighlight: appConfig.theme.colors.primary[500],
									backgroundColor: appConfig.theme.colors.neutrals[800],
								},
							}}
						/>
						<Button
							type="submit"
							label="Entrar"
							fullWidth
							buttonColors={{
								contrastColor: appConfig.theme.colors.neutrals["000"],
								mainColor: appConfig.theme.colors.secondary[600],
								mainColorLight: appConfig.theme.colors.secondary[900],
								mainColorStrong: appConfig.theme.colors.secondary[200],
							}}
						/>
					</Box>
					{/* Formulário */}

					{/* Photo Area */}
					<Box
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "180px",

							padding: "0px",
							backgroundColor: appConfig.theme.colors.neutrals[800],
							border: "1px solid",
							borderColor: appConfig.theme.colors.secondary[400],
							borderRadius: "20px",
							flex: 1,
							Height: "250px",
              overflow: "hidden",
						}}>
						<Image
							styleSheet={{
                
                width: "90%",
                marginTop: "15px",
								borderRadius: "50%",
								marginBottom: "20px",
                filter: "grayscale(100%)",
               
							}}
							src={`https://github.com/${username}.png`}
						/>
						<Text
							variant="body4"
							styleSheet={{
                fontSize: "14px",
                weight: "100%",
								color: appConfig.theme.colors.neutrals[200],
								backgroundColor: appConfig.theme.colors.neutrals[900],
								padding: "3px 60px",
								// borderRadius: "1000px"
							}}>
							{username}
						</Text>
					</Box>
					{/* Photo Area */}
				</Box>
			</Box>
		</>
	);
}
