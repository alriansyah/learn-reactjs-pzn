const HelloWorld = () => {
  return (
    <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
    </div>
  )
}

function HeaderHelloWorld(){
    return (
        <h1 >Hello World</h1>
    )
}

function ParagraphHelloWorld(){
    return (
        <p>Selamat Belajar ReactJS dari Programmer Zaman Now</p>
    )
}

export default HelloWorld