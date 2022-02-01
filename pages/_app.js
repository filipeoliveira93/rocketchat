// esse App vai lançar configuraç~eos sobre todas os componentes, normalmente tudo que queremos lançar em todas as páginas colocamos aqui
function GlobalStyle() {
	return (
		<style global jsx>{`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				list-style: none;
			}
			
			*::-webkit-scrollbar{
				display: none;
			}
			body {
				font-family: "Roboto", sans-serif;
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

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyle/> {/*css geral de toda a aplicação*/}
        <Component {...pageProps} />
        
        </>
        )
  }