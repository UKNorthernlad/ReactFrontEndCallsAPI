function Message()
{
    const backend = "API with CosmosDB backend";
    if(backend) return <h1>React Front End Application calling {backend}</h1>;
    return <h1>Sample React Front End Application</h1>
}

export default Message;