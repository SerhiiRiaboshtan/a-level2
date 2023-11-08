
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

function Category ({category}) {
    // console.log('category._id in Category=>',category._id,'category.name in Category=>',category.name );
    let closuresData ={id:category._id, name:category.name};
    const handlerClick = () => {
        console.log('id in Category=>',closuresData.id ,'category.name in Category=>',closuresData.name);
    }
    return (
        <>
            <TreeItem nodeId={category._id} label={category.name} onClick={handlerClick}>
                {category.subCategories && category.subCategories.length>0 && 
                    (<div>{category.subCategories.map((child) => 
                        <Category key={child._id} category={child}/>)}
                    </div>)
                }
            </TreeItem>
        </>
    )
}

export default function CategoryDraw3({category}) {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
        <div className="treeCategory" style={{ height: '70vh', overflowY: 'auto' }}>
            {category.map((category, index) => <div key={index}><Category category={category}/></div>)}
        </div>  
        {/* <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem> */}
      </TreeView>
    </Box>
  );
}