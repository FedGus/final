export class Note { 
  public id: number;
  public content: string;
  public datecreate: string;
  public datecomplete: string;
  constructor (content: string, datecreate: string, datecomplete: string, id?: number) {
      this.id = id;
      this.content = content;
      this.datecreate = datecreate;
      this.datecomplete = datecomplete;
  }
}
