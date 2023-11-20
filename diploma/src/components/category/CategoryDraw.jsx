
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import styles from './category.module.css';

function Category ({category}) {
    // console.log('category._id in Category=>',category._id,'category.name in Category=>',category.name );
    let closuresData ={id:category._id, name:category.name};
    const handlerClick = () => {
        console.log('id in Category=>',closuresData.id ,'category.name in Category=>',closuresData.name);
    }
    function dragStartHandler(e) {
        console.log('dragStart')
    }
    
    function dragEndHandler(e) {
        console.log('dragEnd')
    }
    
    function dragOverHandler(e) {
        console.log('dragOver')
    }
    
    function dropHandler(e) {
        console.log('drop')
    }


    return (
        <>
            <TreeItem nodeId={category._id} label={category.name} onClick={handlerClick} >
                {category.subCategories && category.subCategories.length>0 && 
                    (<div>
                        {category.subCategories.map((child) => 
                            <Category 
                                key={child._id} 
                                category={child}
                                draggable={true}
                                onDragStart={(e)=>dragStartHandler(e)}
                                onDragLeave={(e)=>dragEndHandler(e)}
                                onDragEnd={(e)=>dragEndHandler(e)}
                                onDragOver={(e)=>dragOverHandler(e)}
                                onDrop={(e)=>dropHandler(e)}
                            />)
                        }
                    </div>)
                }
            </TreeItem>
        </>
    )
}

export default function CategoryDraw({category}) {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
        <div className={styles.categoryContainer}>
            {category.map((category, index) => <div key={index}><Category category={category}/></div>)}
        </div>  
      </TreeView>
    </Box>
  );
}