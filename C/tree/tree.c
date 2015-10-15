int jsw_find(struct jsw_tree *tree, int data)
{
    struct jsw_node *it = tree->root;

    while (it != NULL)
    {
        if (it->data == data)
        {
            return 1;
        }
        else
        {
            int dir = it->data < data;

            it = it->link[dir];
        }
    }

    return 0;
}