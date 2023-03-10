export class FaceSnap {
  constructor(
    public id: number,
    public author: string,
    public title: string,
    public snaps: number,
    public imageUrl: string,
    public updateDate: Date,
    public description: string,
    public location?: string
  ) {}
}
