import { Content } from './content';
import { Kitchen } from './kitchen';
import { Politics } from './politics';
import { Tech } from './tech';
import { User } from './user';

export class BlogManager {
  private users: User[] = [];
  private contents: Content[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  addContent(content: Content): void {
    this.contents.push(content);
  }

  editContent(id: number, title: string, authorId: number, description: string, reference: string) {
    const content = this.contents.find(c => c.id === id);
    if (content) {
      content.title = title;
      content.authorId = authorId;
      content.description = description;
      content.reference = reference;
    }
  }

  deleteContent(id: number){
    this.contents = this.contents.filter(content=>content.id!==id);
    
  }

  viewContent(id: number): Content | undefined {
    return this.contents.find(content => content.id === id);
  }

  getContents(): Content[] {
    return this.contents;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
