int jsw_remove(struct jsw_tree *tree, int data)
{
    if (tree->root != NULL)
    {
        struct jsw_node *p = NULL, *succ;
        struct jsw_node *it = tree->root;
        int dir;

        for (;;)
        {
            if (it == NULL)
            {
                return 0;
            }
            else if (it->data == data)
            {
                break;
            }

            dir = it->data < data;
            p = it;
            it = it->link[dir];
        }

        if (it->link[0] != NULL && it->link[1] != NULL)
        {
            p = it;
            succ = it->link[1];

            while (succ->link[0] != NULL)
            {
                p = succ;
                succ = succ->link[0];
            }

            it->data = succ->data;
            p->link[p->link[1] == succ] = succ->link[1];

            free(succ);
        }
        else
        {
            dir = it->link[0] == NULL;

            if (p == NULL)
            {
                tree->root = it->link[dir];
            }
            else
            {
                p->link[p->link[1] == it] = it->link[dir];
            }

            free(it);
        }
    }

    return 1;
}