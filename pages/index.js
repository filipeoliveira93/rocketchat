//componente react
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";


function Title(props) {
	console.log(props);
	const Tag = props.tag || "h1"; // tag pode ser h1, h2, h3, p etc
	return (
		<>
			<Tag>{props.children}</Tag> {/*children é o conteudo do componente*/}
			<style jsx>{`
				${Tag} {
					font-size: 1.5rem;
					color: ${appConfig.theme.colors.neutrals["000"]};
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
	
	const [username, setUsername]= React.useState(''); //use state vai entregar um array com um valor e uma função para alterar o valor
	const roteamento = useRouter();
	return (
		<>

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
						onSubmit= {(evento) => 
							{evento.preventDefault();
							roteamento.push('/chat');}} //muda para a página de chat quando o entrar é clickado
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: { xs: "100%", sm: "50%" },
							textAlign: "center",
							marginBottom: "16px",
						}}>
						<Title tag="h1">Boas vindas de volta!</Title>
						<Text
							variant="body3"
							styleSheet={{
								marginBottom: "20px",
								color: appConfig.theme.colors.neutrals[400],
							}}>
							{appConfig.name}
						</Text>
							{/* <input type="text"
							 value={username}
							 onChange={function(event) {
								console.log(event.target.value);
								//de onde vem o valor?
								const valor = event.target.value;
								//trocar o valor da variável e avisar quem precisa saber
								setUsername(valor);
								placeholder="Digite seu usuário GitHUb"
							}}
							></input> */}
						<TextField
							fullWidth
							value={username}
							placeHolder="Digite seu usuário GitHUb"
							 onChange={function(event) {
								console.log(event.target.value);
								//de onde vem o valor?
								const valor = event.target.value;
								//trocar o valor da variável e avisar quem precisa saber
								setUsername(valor);
								
							}}
							textFieldColors={{
								neutral: {
									textColor: appConfig.theme.colors.neutrals[200],
									mainColor: appConfig.theme.colors.neutrals[500],
									mainColorHighlight: appConfig.theme.colors.primary[500],
									backgroundColor: appConfig.theme.colors.neutrals[800],
								}}}
							></TextField>
						
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
							minwidth: "180px",
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
								minwidth: "90%",
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
