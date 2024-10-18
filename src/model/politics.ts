import { Content } from './content';

export class Politics extends Content {
  constructor(
    id: number,
    title: string,
    authorId: number,
    description: string,
    reference: string
  ) {
    super(id, title, authorId, description, reference);
  }

  getType(): string {
    return 'Politics';
  }
}
