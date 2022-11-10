let x= "yair"
const songs=[]

function createSong(source ,name, singer, time){
    songs.push({source ,name, singer, time})
}

createSong("milk","ayika",5.1,"https://www.tara.co.il/wp-content/uploads/2018/01/7290000474076.png")
createSong("sogar","sibat hasibot",2.3,"https://d3m9l0v76dty0.cloudfront.net/system/photos/3069462/large/3c62846b6705c61e1f0add31813e26a1.jpg")

export default function Song(props){
    return(
    <div> {props.name} 
    
{songs.map(v=>v.name)}

</div>)}