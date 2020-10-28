g_dict = {
    "1": ["2", "3"],
    "2": ["1", "4", "5"],
    "3": ["1"],
    "4": ["2"],
    "5": ["2"]
}

key = input()


def search_graph(g, key):
    qu = []
    done = set()

    qu.append(key)
    done.add(key)

    while qu:
        p = qu.pop(0)
        print(p)
        for i in g[p]:
            if i not in done:
                qu.append(i)
                done.add(i)


search_graph(g_dict, key)
