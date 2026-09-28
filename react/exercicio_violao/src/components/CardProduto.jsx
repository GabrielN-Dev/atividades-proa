function CardProduto({ id, nome, preco, imagem }) {
  return (
    <div className="preco branco">
      
      <img src={imagem} alt={nome} />
      <p>{nome}</p>
      <p className="valor">{preco}</p>
    </div>
  );
}

export default CardProduto;