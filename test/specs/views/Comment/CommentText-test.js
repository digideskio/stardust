import CommentText from 'src/views/CommentText/CommentText' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentText', () => { 
  common.isConformant(CommentText) 
  common.rendersChildren(CommentText) 
})
