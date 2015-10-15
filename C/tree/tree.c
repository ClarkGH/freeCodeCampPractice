struct jsw_node 
{
    int data;
    struct jsw_node *link[2];
};

struct jsw_tree 
{
    struct jsw_node *root;
};