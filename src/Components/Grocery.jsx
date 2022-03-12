import { useEffect, useState } from 'react'


export function Groceries(){

    const [ input, inputSet ] = useState("")
    const [ data, dataSet] = useState([])
    
    useEffect( ()=>{
        getData()
    },[])
    
    async function getData(){
        try {
            const res1 = await fetch('/goroceries')
            const res2 = await res1.json()
            dataSet(res2)
        } catch (error) {
            console.log({ message : error.message})
        }
    }
    function postData(){
        fetch("/goroceries",{
            method : "POST",
            body : JSON.stringify({
                title : input,
                status : false
            }),
            headers : {
                "content-type" : "application/json"
            }
        }).then(()=> {getData()})
    }
    let obj = 
    {
        "color" : "blue",
        "padding" : "10px"
    }
    function deleteData(id){
        fetch(`/goroceries/${id}`,{
            method : "DELETE"
        }).then(()=>{
            getData()
        })
    }
    function toggleData(el){
        let x = el.status ? false : true
        let obj = {
            title : el.title,
            status : x
        }
        if(el)
        fetch(`/goroceries/${el.id}`,{
            method : "PATCH",
            body : JSON.stringify(obj),
            headers : {
                "content-type" : "application/json"
            }
        }).then(()=>{
            getData()
        })
    }

    let styleArr = [
        {
            background : "red",
            fontWeight : "bold"
        },
        {
            color : "yello"
        },
        {
            textDecoration : "line-through"
        },
        {
            textDecoration : "none"
        }
    ]
    return (
        <>
            <div>Hi Vijendra is too crazy.</div>
            <br />
            <input type="text" onChange={ (e)=>inputSet(e.target.value)}/>
            <button onClick={()=>postData()}>ADD</button>

            <tbody className='App' >
                <tr>
                    <th style={obj}>TASK</th>
                    <th style={obj}>DELETE BUTTON</th>
                    <th style={obj}>TOGGLE BUTTON</th>
                </tr>
                {
                data.map(el=> 
                <tr key={el.id}>
                    <td>{el.title}</td>
                    <td ><button style={styleArr[0]} onClick={()=>deleteData(el.id)}>DELETE</button></td>
                    <td><button onClick={ ()=> toggleData(el)}>TOGGLE</button></td>
                    <td style={ el.status?styleArr[2] : styleArr[3]}>{ el.status ? "Done": "Not Done"}</td>
                </tr>)
                }
            </tbody>
        </>
    )
}