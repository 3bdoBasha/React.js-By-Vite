
const myNav = [
    {id:1,brand:"مقالات خواطـر"},
    {id:6,text:"الرئيسـية"},
    {id:2,text:"تواصـل معـنا"},
    {id:3,text:"التقيــمـات"},
    {id:4,text:"المشـاريـع"},
    {id:5,text:"وسائل التواصل"},
];


const NavBar = () => {
    return (
    <div className="fixed top-0 right-0 left-0 h-[90px] w-full p-5 border-b z-5"
        style={{ backdropFilter: "blur(10px)" , direction:"rtl" ,
        }}>
        <div className="md:flex justify-center item-center md:flex-row hidden gap-4">
        <div className='flex justify-evenly flex-row mr-20'>
        {myNav.map((item) => (
            <div key={item.id} className=' transition hover:scale-105 cursor-pointer' style={{display:"flex",justifyContent:"space-between"}}> 
            <span style={{fontSize:"25px"}}><h1 style={{color:"white",display:"flex",marginLeft:"50px",fontSize:"30px"}} className="text-xl">{item.brand}</h1></span>
            <a href={`/${item.text}`} className="ml-20px">
                {item.text}
            </a>
            </div>
        ))}
        </div>
    </div>
    </div>
);
}

export default NavBar;