def no_duplicated(s: str) -> str:
    formatted = []
    for item in s:
        if item in formatted:
            formatted.pop(formatted.index(item))
        else:
            formatted.append(item)
    return sorted(formatted)
