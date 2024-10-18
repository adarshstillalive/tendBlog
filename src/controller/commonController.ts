import { Request, Response } from 'express';
import { BlogManager } from '../model/blogManager';
import { Tech } from '../model/tech';
import { Politics } from '../model/politics';
import { Kitchen } from '../model/kitchen';
import { Content } from '../model/content';
import { User } from '../model/user';

const user: User = { id: 1, name: 'Tom', email: 'tomthecat@cn.com' }

const blogManager = new BlogManager();
blogManager.addUser({ id: 1, name: 'Tom', email: 'tomthecat@cn.com' });
blogManager.addUser({ id: 2, name: 'Jerry', email: 'jerrythemouse@cn.com' });

blogManager.addContent(new Tech(1, 'Kill mouse', 1, 'A plan to trap a mouse', 'https://reference1.com'));
blogManager.addContent(new Politics(2, 'Escape from cat', 2, 'A detailed strategy to avoid cats', 'https://reference2.com'));

const getHome = async (req: Request, res: Response) => {
  try {
    let contents = blogManager.getContents();
    contents = contents.filter(content=>content!==null && content!==undefined)
 
    res.render('index', { contents, user });
  } catch (error) {
    console.log(error);
  }
};

const getEditContent = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const content = blogManager.viewContent(id);

    res.render('editContent', { content });
  } catch (error) {
    console.log(error);
  }
};

const postEditContent = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const { title, description, reference } = req.body;

    const authorId:number = 1;

    blogManager.editContent(id, title, authorId, description, reference);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};

const getAddBlog = async (req: Request, res: Response) => {
  try {
    res.render('addBlog')
  } catch (error) {
    console.log(error);

  }
}

const postAddBlog = async (req: Request, res: Response) => {
  try {
    const { title, description, reference, type } = req.body;

    let newContent: Content;

    const maxId = Math.max(...blogManager.getContents().map(c => c.id), 0);

    switch (type) {
      case 'tech':
        newContent = new Tech(maxId + 1, title, user.id, description, reference);
        break;
      case 'kitchen':
        newContent = new Kitchen(maxId + 1, title, user.id, description, reference);
        break;
      case 'politics':
        newContent = new Politics(maxId + 1, title, user.id, description, reference);
        break;
      default:
        newContent = new Content(maxId + 1, title, user.id, description, reference);
    }


    blogManager.addContent(newContent)
    res.redirect('/');
  } catch (error) {
    console.log(error);

  }
}

const getViewBlog = async(req:Request, res:Response)=>{
  try {
    const id:number = Number(req.params.id)
    const content = blogManager.viewContent(id)
    res.render('viewBlog', {content, user})
  } catch (error) {
    console.log(error);
    
  }
}

const getDeleteBlog = async(req:Request, res:Response)=>{
  try {
    const id:number = Number(req.params.id)
    blogManager.deleteContent(id)
    res.redirect('/')
  } catch (error) {
    console.log(error);
    
  }
}



export default {
  getHome,
  getEditContent,
  postEditContent,
  getAddBlog,
  postAddBlog,
  getViewBlog,
  getDeleteBlog,
};
