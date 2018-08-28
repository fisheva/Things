class Album {
    label: Album.AlbumLabel;
}
module Album {
    export class AlbumLabel{
        name:string;
        show(){
            console.log(this.name);
        }
        constructor(name:string){
            this.name = name;
        }
    }
}
var newAlbum = new Album.AlbumLabel("Ys");
newAlbum.show();