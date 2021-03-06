import Comment from 'src/views/Comment/Comment' 
import CommentActions from 'src/views/Comment/CommentActions' 
import CommentAuthor from 'src/views/Comment/CommentAuthor' 
import CommentAvatar from 'src/views/Comment/CommentAvatar' 
import CommentContent from 'src/views/Comment/CommentContent' 
import CommentMeta from 'src/views/Comment/CommentMeta' 
import CommentText from 'src/views/Comment/CommentText' 
import * as common from 'test/specs/commonTests' 
describe.only('Comment', () => { 
  common.isConformant(Comment) 
  common.rendersChildren(Comment) 
  common.hasSubComponents(Comment, [ 
    CommentActions, 
    CommentAuthor, 
    CommentAvatar, 
    CommentContent, 
    CommentMeta, 
    CommentText, 
  ]) 
})
