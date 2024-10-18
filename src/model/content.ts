export class Content {
  id: number;
  title: string;
  authorId: number;
  description: string;
  reference?: string;
  createdAt?: Date;

  constructor(
    id: number,
    title: string,
    authorId: number,
    description: string,
    reference?: string,
    createdAt: Date = new Date() 
  ) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.description = description;
    this.reference = reference;
    this.createdAt = createdAt; 
  }

  getType(): string {
    return 'General Content';
  }

  getPreview(): string {
    return this.description.substring(0, 50) + '...';
  }
}
