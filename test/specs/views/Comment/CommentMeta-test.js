import CommentMeta from 'src/views/CommentMeta/CommentMeta' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentMeta', () => { 
  common.isConformant(CommentMeta) 
  common.rendersChildren(CommentMeta) 
})
