import "../App.css"

export default function SideMenu(){
    const buttons = [
        {id:1,content:"✨كل جديـد",img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/Tips_on_Fundamental_Reactjs_Interview_Questions.jpg"},
        {id:2,content:"⚙️البرمجة", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaZqUn3wHhRI_qtuLtyi07xMhMYCVoifz9g&s"},
        {id:3,content:"✨المميزة كـ مقروءة", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLD6XcRPMd4JmdozwMv0pYzoAIDIO6r0qhA&s"},
        {id:3,content:"لغة html", img:"https://www.w3schools.com/html/img_notepad.png"},

    ]   

    const listButtons = buttons.map((button)=>{
        return(
            <div key={button.key} style={{padding:"1px",marginLeft:"50px"}}>
                <button id="tag">
                    {button.content}
                    <br />
                    <img src={button.img} className="imgs"></img>
                    <br />
                </button>
            </div>
        )
    });

    return(
        <div className="sidebar" style={{display:"flex",alignContent:"center",justifyContent:"center",flexDirection:"column",border: "teal solid 5px",height:"850px",padding:"20px",width:"35%",marginTop: "-65%",marginLeft: "53%"}}>
            {listButtons}
            <br />
        </div>
    );
}

// دا الكود بتاعه