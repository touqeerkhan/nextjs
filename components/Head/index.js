import Head from "next/head";


const Heading = (props)=> {
    // Here we will render basic html for head
    return (
         <Head>
             <title></title>
        <title>{props.title}</title>
        <meta name={props.meta.name} content={props.meta.content} ></meta>
      </Head>)


}
export default Heading;