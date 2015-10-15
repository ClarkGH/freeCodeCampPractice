struct jsw_node *jsw_insert_r(struct jsw_node *root, int data)
{
    if (root == NULL)
    {
        root = make_node(data);
    }
    else if (root->data == data)
    {
        return root;
    }
    else
    {
        int dir = root->data < data;

        root->link[dir] = jsw_insert_r(root->link[dir], data);
    }

    return root;
}

int jsw_insert(struct jsw_tree *tree, int data)
{
    tree->root = jsw_insert_r(tree->root, data);

    return 1;
}