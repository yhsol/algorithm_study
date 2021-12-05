def solution(s: str) -> int:
    answer = 0

    for i in range(len(s) - 1):
        for j in range(i+1, len(s)):
            if s[i] == s[j]:
                # 같은 글자를 만났어, 그러면 뭘 해야될까
                # 여기서 뭔가 할 수 있지 않으려나?
                cut = s[i:j]  # 뭐 요런걸 할 수 있겠지?
                # s[i:j] 범위의 중복이 계속 일어나는가. 그걸 봐야되는데...
                # 일단 반복을 한번 더 해야하나?
                # cut 범위를 찾았으면
                # 나머지(rest) 요소를 반복하면서
                # rest[i] == rest[j] 인지
                # i 랑 j 는 for 문 두번 할 때 i, j 숫자 설정할 때 위 j-i 만큼의 차이를 j 에 플러스 하는 식으로 할 수 있을 듯
                # 그러면 그 반복을 돌면서 같은게 있으면 그 만큼을 또 중복으로 계산하고, 다시 answer 에 반영시키고...
                # 이렇게까지 복잡하게 풀어야하는게 맞나?
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
