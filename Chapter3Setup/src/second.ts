////more about interfaces
//*more than one interface an be implement 
//*extra datas can be added to the child classes


interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}

interface story{
    createStory():string
}

class instagram implements TakePhoto,story{
constructor(
    public  cameraMode:string,
    public filter:string,
    public burst:number, 
    public made:string
){}
 createStory(): string {
    return 'aswanth'
}

}