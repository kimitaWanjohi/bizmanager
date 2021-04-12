import {Link} from 'react-router-dom'

export default function Layout({children, title}) {

    return (
        <>
    <div className="root">
        <header>
            <Link to="/">
                <h5>Home</h5>
            </Link>
            
            <Link to="/products">
                <h5>Products</h5>
            </Link>
        </header>

        <div className="head">
        <h3> { title } </h3>
        </div>
        {
            children
        }
        
        <footer className="footer">
            <h5> &copy; { new Date().getFullYear()} </h5>
        </footer>

        <style> {`
            .root{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
            }
            .head {
                width: 100%;
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 1.2rem;
                background: indigo;
            }

            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: indigo;
            }

            header a {
                color: darkgrey;
                text-decoration: none;

            }

            header a: hover{
                font-weight: bold;
                color: lightgrey
            }

            footer {
                padding: 1em;
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: lightgrey;
            }
        `} </style>

    </div>

        </>
    )

}