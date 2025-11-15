import './Style/Footer.css'
function Footer(){

    return(
        <footer>
            <p>&copy; Kanuz.cv </p>
            <p>{new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer