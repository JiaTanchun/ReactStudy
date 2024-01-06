export default function Greeter({name,from,happy=8}){

    return (
    <>
    <h1>Hi There {name}</h1>
    <h2>-{from}</h2>
    <h2>{happy}</h2>
    </>
    )
}