import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { createClient } from '@supabase/supabase-js'


const supabase_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQwODE3MywiZXhwIjoxOTU4OTg0MTczfQ.EZ0Ol-a0CWhpYkObjvMQRAao_JwG7wmOM66812CudGw'
//chave 
const supabase_URL = 'https://twrsqmecoqpvckxwsvjy.supabase.co'
const supabase_Client = createClient(supabase_URL, supabase_KEY)



export default function ChatPage() {
	// Sua lógica vai aqui
	const [message, setMessage] = React.useState("");
	const [ListMessages, setListMessages] = React.useState([]);
	// ./Sua lógica vai aqui

	React.useEffect( () => { //essa função recebe tudo que tem um funcionamento diferente do carregamento de estages do react
		supabase_Client //nesse caso vamos utlizar para evitar que ele realize requisições na API toda vez que um estado mudar
		.from('mensagens' ) //peganod a tabela dentro do supabase
		.select('*') //pegando tudo da tabela
		.order( 'id', {ascending: false }) //vai pegar o array de mensagens em ordem inversa, ultimo que entra é o primeiro a ser visto
		.then(({data, error }) => {  
			setListMessages(data)
			// console.log('Dados supabase', data)
		});


	}, [])


	function handleNewMessage(newMessage) {
		const message = {
			// id: ListMessages.length + 1,
			user: "username",
			text: newMessage,
		};
		setMessage("");
		supabase_Client.from('mensagens').insert([message])
		.then(({data}) => {
			console.log('mensagem', data)
			setListMessages([
				//chama a função que cria a lista de mensagens
				data[0],
				...ListMessages
	
			]);
		})
		;
	}
	return (
		<Box
			styleSheet={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: appConfig.theme.colors.primary[800],
				// backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundBlendMode: "multiply",
				color: appConfig.theme.colors.neutrals["000"],
			}}>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
					borderRadius: "5px",
					backgroundColor: appConfig.theme.colors.neutrals[700],
					height: "100%",
					maxWidth: "95%",
					maxHeight: "95vh",
					padding: "32px",
				}}>
				<Header />
				<Box
					styleSheet={{
						position: "relative",
						display: "flex",
						flex: 1,
						height: "80%",
						backgroundColor: appConfig.theme.colors.neutrals[600],
						flexDirection: "column",
						borderRadius: "15px",
						padding: "16px",
					}}>
					<MessageList mensagens={ListMessages}></MessageList>
					<Box
						as='form'
						styleSheet={{
							display: "flex",
							flexDirection: "column",
							alignItems: "bottom",
						}}>
						{/* {ListMessages.map((message) => {
							return (
								<>
									<li key={message.id}>
										{message.user}: {message.text}
									</li>
								</>
							);
						})} */}
						<TextField
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									event.preventDefault(); // vai evitar pular linha quando enter for pressionado

									handleNewMessage(message);
									console.log(ListMessages);
								}
							}}
							placeholder='Insira sua mensagem aqui...'
							type='textarea'
							styleSheet={{
								width: "100%",

								border: "0",
								// resize: 'none',
								borderRadius: "5px",
								padding: "6px 8px",
								backgroundColor: appConfig.theme.colors.neutrals[800],
								marginRight: "12px",
								color: appConfig.theme.colors.neutrals[200],
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

function Header() {
	return (
		<>
			<Box
				styleSheet={{
					width: "100%",
					marginBottom: "16px",
					display: "flex",
					alignItems: "center",
                    
					justifyContent: "space-between",
				}}>
				<Text variant='heading5'>Chat</Text>
				<Button variant='tertiary' colorVariant='neutral' label='Logout' href='/' />
			</Box>
		</>
	);
}

function MessageList(props) {
	console.log("MessageList", props.ListMessages);
	return (
		<Box
			tag='ul'
			styleSheet={{
				overflow: "scroll",
				display: "flex",

				flexDirection: "column-reverse",

				flex: 1,
				color: appConfig.theme.colors.neutrals["000"],
				marginBottom: "16px",
			}}>
			{props.mensagens.map((mensagem) => {
				return (
					<Text
						key={mensagem.id}
						tag='li'
						styleSheet={{
							borderRadius: "5px",
							padding: "6px",
							marginBottom: "12px",
							hover: {
								backgroundColor: appConfig.theme.colors.neutrals[700],
							},
						}}>
						<Box
							styleSheet={{
								marginBottom: "8px",
							}}>
							<Image
								styleSheet={{
									width: "20px",
									height: "20px",
									borderRadius: "50%",
									display: "inline-block",
									marginRight: "8px",
								}}
								src={`https://github.com/filipeoliveira93.png`}
							/>
							<Text tag='strong'>{mensagem.user}</Text>
							<Text
								styleSheet={{
									fontSize: "10px",
									marginLeft: "8px",
									color: appConfig.theme.colors.neutrals[300],
								}}
								tag='span'>
								{new Date().toLocaleDateString()}
							</Text>
						</Box>
						{mensagem.text}
					</Text>
				);
			})}
			
		</Box>
	)
}
