import CommentActions from 'src/views/CommentActions/CommentActions' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentActions', () => { 
  common.isConformant(CommentActions) 
  common.rendersChildren(CommentActions) 
})
