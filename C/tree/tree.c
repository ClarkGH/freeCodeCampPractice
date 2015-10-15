int jsw_find_r(struct jsw_node *root, int data)
{
    if (root == NULL)
    {
        return 0;
    }
    else if (root->data == data)
    {
        return 1;
    }
    else
    {
        int dir = root->data < data;

        return jsw_find_r(root->link[dir], data);
    }
}

int jsw_find(struct jsw_tree *tree, int data)
{
    return jsw_find_r(tree->root, data);
}