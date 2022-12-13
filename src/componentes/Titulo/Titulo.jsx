import './Titulo.css'

function Titulo({ titulo }) {
    return (
        <header >
            <h2 className="titulo">{titulo}</h2>
            <div className='logo'>
                <img src="../../public/logoBabyBom.png" alt="" />
            </div>
        </header>
    )
}
export default Titulo

