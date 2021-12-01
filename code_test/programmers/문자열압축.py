def solution(s: str) -> int:
    answer = 0

    for i in range(len(s) - 1):
        for j in range(i+1, len(s)):
            if s[i] == s[j]:
                # 같은 글자를 만났어, 그러면 뭘 해야될까
                # 여기서 뭔가 할 수 있지 않으려나?
                cut = s[i:j+1]  # 뭐 요런걸 할 수 있겠지?
                if cut in s[j+1:]:  # 뒤쪽에 같은 단어가 남아있는지?
                    # 여기서 뭔가를 하고
                    # j - i 같은 식으로 길이를 알아낼 수 있을 듯?
                    # cut 가 s 에 몇개 있는지 확인하고,
                    # cut 들은 다 빼고 (몇갠지 카운트는 하고)
                    # 나머지 문자에 cut 카운트 해서 문자열 만들고 길이 세면 될 듯.
                    count = s.count(cut)
                    rest = s.replace(cut, '')
                    countstr = count + cut  # 포매팅 필요
                    answer = min(answer, len(rest + countstr))
                    # else: 면 뭐 안해도 될 듯

    return answer


print(solution("abcabcdede"))
