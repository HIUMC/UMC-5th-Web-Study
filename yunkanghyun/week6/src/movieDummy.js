// 사용한 API : TMDB 현재 한국에서 상영 중인 영화 API
// API Document : https://developers.themoviedb.org/3/movies/get-now-playing
// Request : https://api.themoviedb.org/3/movie/now_playing?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR

// 아래는 Response Data
export const dummy = {
    "dates": {
      "maximum": "2023-10-02",
      "minimum": "2023-08-15"
    },
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
        "genre_ids": [
          28,
          18,
          12
        ],
        "id": 980489,
        "original_language": "en",
        "original_title": "Gran Turismo",
        "overview": "레이싱 게임 ‘그란 투리스모’의 덕후 ‘잔 마든보로’ 스피드라고는 게임으로만 만족해야 했던 그에게 레이싱 선수 발굴을 목표로 만들어진 ‘그란 투리스모 콘테스트’라는 기회가 찾아온다. 앉아서 게임만 하던 그의 앞에 닥친 혹독한 훈련과 치열한 경쟁.뛰어난 잠재력을 입증해 프로 레이싱 팀에 합류하는데 성공하지만 상대팀 선수들은 게이머 출신인 그를 인정하지 않고, 프로 레이싱의 세계는 그를 더욱 거칠게 몰아붙이는데...  리셋 버튼 없는 목숨을 건 실전! 게이머에서 레이서가 된 소년의 흥미로운 스토리가 스크린에서 펼쳐진다!",
        "popularity": 3389.624,
        "poster_path": "/mewjjhpju5JT1wDFJDMdctWcCqd.jpg",
        "release_date": "2023-09-20",
        "title": "그란 투리스모",
        "video": false,
        "vote_average": 8,
        "vote_count": 763
      },
      {
        "adult": false,
        "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
        "genre_ids": [
          28,
          878,
          27
        ],
        "id": 615656,
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "전 세계에서 가장 깊은 마리아나 해구, 역사상 가장 거대하고 무자비한 포식자가 도사리는 그곳에서 강철 다이버 ‘조나스’(제이슨 스타뎀)가 더 맹렬하게 돌아온 ‘메가로돈’과 짜릿한 대결을 펼치는 액션 어드벤처",
        "popularity": 1292.22,
        "poster_path": "/cbAHK6Vrt0GClMRUxH8TsgC2JqL.jpg",
        "release_date": "2023-08-15",
        "title": "메가로돈 2",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 2114
      },
      {
        "adult": false,
        "backdrop_path": "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "id": 968051,
        "original_language": "en",
        "original_title": "The Nun II",
        "overview": "1956년, 프랑스의 한 성당에서 신부가 끔찍하게 살해당한다. 이 사건을 조사하기 위해 파견된 아이린 수녀는 4년 전 자신을 공포에 떨게 했던 악마의 기운을 느낀다. 어두운 밤, 계속해서 일어나는 의문의 사건들 가운데 충격적인 진실이 드러나는데…",
        "popularity": 1867.519,
        "poster_path": "/hx4R7GqhiUP2LHJZJNrzCIqadd3.jpg",
        "release_date": "2023-09-27",
        "title": "더 넌 2",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 401
      },
      {
        "adult": false,
        "backdrop_path": "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 717930,
        "original_language": "en",
        "original_title": "Kandahar",
        "overview": "CIA 비밀요원 ‘톰’(제라드 버틀러) 그는 이란의 핵 작전’을 무마시키기 위해 경유지인 아프가니스탄으로 향한다. 하지만 펜타곤 소속 내부 고발자로 인해 작전이 노출되고, 톰의 신분도 탄로나게 된다. 파키스탄 정보부와 이슬람 무장단체 탈레반은 톰을 납치하기 위해 움직이기 시작했고, 톰은 동맹군이 있는 칸다하로 향하게 되는데... 400마일 떨어진 아프가니스탄의 칸다하, 그곳만이 유일한 탈출구이다!",
        "popularity": 573.703,
        "poster_path": "/M2w3Hl3Xnjwjm06A14PuuRVOWe.jpg",
        "release_date": "2023-09-20",
        "title": "칸다하",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 593
      },
      {
        "adult": false,
        "backdrop_path": "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
        "genre_ids": [
          16,
          35,
          28
        ],
        "id": 614930,
        "original_language": "en",
        "original_title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        "overview": "뉴욕의 하수구로 스며든 미스터리한 녹색 액체, ‘우즈’로 인해 아기 거북이 네 마리와 청년 쥐 스플린터는 사람과 비슷한 모습의 돌연변이가 된다. 15년 후, 10대 청소년이 된 레오나르도, 미켈란젤로, 라파엘, 도나텔로는 하수구에 숨어 사는 생활에서 벗어나 인간 세상에서 평범한 삶을 살고 싶어하고 우연히 만난 학생 기자 에이프릴과 함께 도시를 위협하는 '슈퍼플라이'와 그 일당을 물리치면 뉴욕의 히어로가 되어 당당히 세상에 나갈 수 있을 거라는 꿈을 꾸는데… 인간들을 모두 돌연변이로 만들겠다는 ‘슈퍼플라이’의 음모로 위험에 빠진 뉴욕! 틴에이저 히어로로 다시 태어난 ‘닌자터틀’ 형제들의 스트릿 액션 어드벤처가 펼쳐진다!",
        "popularity": 358.522,
        "poster_path": "/6xORIhe6cP3iM5RYTHs7MTOH1qa.jpg",
        "release_date": "2023-09-14",
        "title": "닌자터틀: 뮤턴트 대소동",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 678
      },
      {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.",
        "popularity": 403.339,
        "poster_path": "/4ZLnVUfiCe3wX8Ut9eyujndpyvA.jpg",
        "release_date": "2023-08-15",
        "title": "오펜하이머",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3784
      },
      {
        "adult": false,
        "backdrop_path": "/xfa49EDtKvs2yC9l4xroKtKlrcc.jpg",
        "genre_ids": [
          27,
          53,
          10752
        ],
        "id": 1032666,
        "original_language": "en",
        "original_title": "Bunker",
        "overview": "1차 세계대전 중 땅속에 갱도를 파듯 만들어진 의문스런 벙커에 갇힌 한 무리의 미국과 영국 군인들. 서서히 서로를 믿지 못하고 경계하게 만드는 불순한 존재에 직면한다. 그들 사이에 편집증과 두려움이 커지고 결국 죽고 죽이는 갈등이 폭발한다, 그리고 군인들은 벙커에 숨어서 도사리며 먹이를 노리고 있는 진정한 악마와 직면한다.",
        "popularity": 195.547,
        "poster_path": "/wkzQmebaktKnlqy6zakoDS0yxdR.jpg",
        "release_date": "2023-09-14",
        "title": "지옥갱",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 12
      },
      {
        "adult": false,
        "backdrop_path": "/dPagCvFuFWKEoEcjTGwwrdpdTPp.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 983793,
        "original_language": "en",
        "original_title": "Mojave Diamonds",
        "overview": "전직 종합격투기 선수 ‘로이’(도널드 세로니)는 동생 ‘대니’(크리스토퍼 마허)와 함께 5천만 달러 불법 다이아몬드를 운반하다 괴한들에 의해 도난당한다.  다이아몬드의 주인이자 범죄 조직의 실세 ‘줄리언’(퀸튼 잭슨)은 이 사실을 알고 ‘로이’의 큰형 ‘조’(차엘 소넨)의 가족들을 납치하는데…",
        "popularity": 367.814,
        "poster_path": "/bqHq6BRyfY1GOMzwSEFpwVVjUhb.jpg",
        "release_date": "2023-08-24",
        "title": "모하비 다이아몬드",
        "video": false,
        "vote_average": 4,
        "vote_count": 2
      },
      {
        "adult": false,
        "backdrop_path": "/eiIvFiqOClwNX3nUmRlEmNarFCk.jpg",
        "genre_ids": [
          10749,
          35
        ],
        "id": 1001811,
        "original_language": "en",
        "original_title": "My Big Fat Greek Wedding 3",
        "overview": "툴라와 이안 부부는 자신의 고향에서 뿌리를 찾아 달라는 아버지의 유언을 들어 드리기 위해 난생 처음 가족들과 함께 고향인 그리스의 작은 마을로 여행을 떠난다. 무언가를 숨기는 듯한 딸 패리스부터 그녀의 전 썸남 아리스토텔레스, 그리스 미신쟁이에 잔소리 대장인 불라와 프리다 이모, 세상 천진난만한 동생 닉까지 뭉칠수록 더 별난 이들은 도착한 그리스 마을에서 예상치 못한 비밀과 사건을 마주하며 우여곡절을 겪기 시작하는데…",
        "popularity": 186.96,
        "poster_path": "/8p7y5v92YYCeemkRbdF07rL1Oq2.jpg",
        "release_date": "2023-09-20",
        "title": "나의 그리스식 웨딩 3",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 37
      },
      {
        "adult": false,
        "backdrop_path": "/qZOuoBoKCDLSm1EvYz2eBub8Cto.jpg",
        "genre_ids": [
          16,
          12,
          14,
          10751
        ],
        "id": 939338,
        "original_language": "fr",
        "original_title": "Pattie et la colère de Poséidon",
        "overview": "평화로운 항구 도시의 꼬마 생쥐 ‘패티’는 전설 속 아르고 원정대처럼 위대한 모험을 하고 영웅이 되는 꿈을 꾼다. 하지만 겁 많은 딸 바라기 아빠 고양이 ‘샘’은 자꾸 위험한 바깥세상으로 나가려 하는 ‘패티’가 걱정스럽다. 어느 날, 질투 많은 바다의 신 ‘포세이돈’이 멋진 삼지창을 든 자신의 동상을 세우라 명령하고, ‘패티’는 위기에 처한 도시를 살리기 위해 전설의 아르고 원정대를 부활시켜 모험을 떠난다. 걱정 많은 ‘샘’도 어쩔 수 없이 모험에 동참하는데…",
        "popularity": 181.902,
        "poster_path": "/crgWtan0cslODPqfYe9X4hqeYhT.jpg",
        "release_date": "2023-09-21",
        "title": "아르고 원정대: 꼬마 영웅 패티의 대모험",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 39
      },
      {
        "adult": false,
        "backdrop_path": "/2zzaJ9jzyK1Am8XoS0dFjmP8V0L.jpg",
        "genre_ids": [
          28,
          53,
          27
        ],
        "id": 1135229,
        "original_language": "en",
        "original_title": "I Am Rage",
        "overview": "에린은 새로운 남자친구의 고향인 어느 한적한 시골마을을 방문한다. 그곳에서 비슷하게 여행을 온 커플들을 만나게 되고 그들은 실종이 되어도 누구도 찾지 않은 외로운 사람들이라는 공통점이 있다는 것을 알게 된다. 그들은 인간의 피를 거래하고 마시며 초자연적인 힘을 얻는 사이비 살인마 집단에 납치된 것. 하지만 에린은 위기에 몰리거나 분노하게 되면 극한의 잔인함과 폭력성이 초인적으로 발현되는 특이한 혈통을 가진 체질이다. 에린의 분노가 폭발하고 그녀를 사냥한 악인들에 대한 더욱 잔혹한 사냥이 시작된다.",
        "popularity": 165.512,
        "poster_path": "/z1nFd03qoiCrHlGSxBlumkF9uZh.jpg",
        "release_date": "2023-09-14",
        "title": "론 서바이버 : 아이 엠 리벤지",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 19
      },
      {
        "adult": false,
        "backdrop_path": "/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg",
        "genre_ids": [
          27
        ],
        "id": 709631,
        "original_language": "en",
        "original_title": "Cobweb",
        "overview": "이제 막 여덟 살이 된 소년 ‘피터’ . 밤이 찾아오면, 방에서 의문의 노크 소리가 들려왔고, 끔찍한 공포에 사로잡힌 피터는 부모님 ‘마크’와 ‘캐롤’에게 이 사실을 알린다..  하지만 그들이 피터의 방에 들어선 순간 아무런 소리도 들리지 않아 대수롭지 않게 여긴다. 다음 날 저녁, 피터는 또다시 방에서 의문의 노크 소리를 듣게 되고 소리가 나는 방향으로 한 발자국 씩 다가간다. 그리고 방 벽지를 뜯어보니 자그마한 구멍이 뚫려 있었고, 벽 너머로 정체를 알 수 없는 ‘무언가’의 목소리가 들려오는데…",
        "popularity": 142.594,
        "poster_path": "/5Ol63pZT8JfYgFMfADqySpgwkdj.jpg",
        "release_date": "2023-09-20",
        "title": "노크: 더 하우스",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 400
      },
      {
        "adult": false,
        "backdrop_path": "/5Jfk2p3iGrChUKkl0cBD5krr2u8.jpg",
        "genre_ids": [
          16,
          10749
        ],
        "id": 998731,
        "original_language": "ja",
        "original_title": "映画 佐々木と宮野ー卒業編ー",
        "overview": "여성스러운 얼굴이 콤플렉스인 고등학교 2학년 ‘미야노’와 불량해 보이는 3학년 선배 ‘사사키’. BL 만화를 빌려 주면서 시작된 두 사람은 마침내 사랑에 빠진다. 어느덧 계절은 겨울로 바뀌고 ‘사사키’의 졸업이 코 앞으로 다가온다 두 사람은 함께하는 고교 생활을 소중하게 보내지만, 졸업이 다가올수록 애틋한 마음은 커져만 가는데… 고민도 불안도 날려 버리고, 언제나 아껴 주고 싶은 마음을 전하고 싶어!",
        "popularity": 125.461,
        "poster_path": "/4XeVvKoPKl5Mbiu6ZN3esMt51e7.jpg",
        "release_date": "2023-09-06",
        "title": "극장판 사사키와 미야노 - 졸업편",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 20
      },
      {
        "adult": false,
        "backdrop_path": "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
        "genre_ids": [
          9648,
          53,
          878
        ],
        "id": 536437,
        "original_language": "en",
        "original_title": "Hypnotic",
        "overview": "과거 공원에 놀러갔다가 잠시 한눈을 판 사이에 어린 딸을 잃어버린 대니 루크 형사는 힘든 나날을 보내고 있다. 그러던 어느 날 시민의 신고로 출동한 은행 강도 사건에서 딸의 실종과 관련된 단서를 발견하는데...",
        "popularity": 135.459,
        "poster_path": "/bzn2BY0QWiClC2tOHWVAxp7FeCg.jpg",
        "release_date": "2023-09-20",
        "title": "힙노틱",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 619
      },
      {
        "adult": false,
        "backdrop_path": "/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
        "genre_ids": [
          9648,
          53,
          80
        ],
        "id": 945729,
        "original_language": "en",
        "original_title": "A Haunting in Venice",
        "overview": "세계적 명탐정 '에르큘 포와로'는 오랜 탐정 생활에서 은퇴하여 아름다운 도시 베니스에서 평범한 삶을 살아가고 있다. 그런 그에게 오랜 친구이자 베스트셀러 작가인 '아리아드네 올리버'가 찾아와 죽은 영혼을 부를 수 있다고 알려진 영험한 심령술사의 실체를 밝혀달라고 부탁하게 된다.핼러윈 밤, 베니스 운하 위 위치한 고풍스러운 저택의 주인이자 1년 전 사랑하는 딸을 잃고 깊은 상실에 빠진 '로웨나 드레이크'의 초대로 교령회에 참석한 이들은 미스터리한 심령술사 '조이스 레이놀즈'가 죽은 영혼의 목소리를 전하는 광경을 보며 혼란에 빠지게 된다. 갑자기 발생한 끔찍한 살인 사건에 실체 없는 용의자를 쫓던 '에르큘 포와로'는  자신의 모든 믿음이 흔들리는 경험을 하며 충격에 빠지게 되는데....",
        "popularity": 138.82,
        "poster_path": "/dUQdookYulZV9sTIEvAuAu1Ptxv.jpg",
        "release_date": "2023-09-13",
        "title": "베니스 유령 살인사건",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 540
      },
      {
        "adult": false,
        "backdrop_path": "/urDWNffjwmNi5IQaezw9GwqkUXa.jpg",
        "genre_ids": [
          12,
          14
        ],
        "id": 767,
        "original_language": "en",
        "original_title": "Harry Potter and the Half-Blood Prince",
        "overview": "어둠의 세력이 더욱 강력해져 머글 세계와 호그와트까지 위협해온다. 위험한 기운을 감지한 덤블도어 교수는 다가올 전투에 대비하기 위해 해리 포터와 함께 대장정의 길을 나선다. 볼드모트를 물리칠 수 있는 유일한 단서이자 그의 영혼을 나누어 놓은 7개의 호크룩스를 파괴하는 미션을 수행해야만 하는 것! 또한 덤블도어 교수는 호크룩스를 찾는 기억여행에 결정적 도움을 줄 슬러그혼 교수를 호그와트로 초청한다. 한편 학교에서는 계속된 수업과 함께 로맨스의 기운도 무르익는다. 해리는 자신도 모르게 지니에게 점점 끌리게 되고, 새로운 여자 친구가 생긴 론에게 헤르미온느는 묘한 질투심을 느끼는데...",
        "popularity": 110.225,
        "poster_path": "/yrGlb3HLtjGp39mv4MJ5UuIHcj4.jpg",
        "release_date": "2023-09-06",
        "title": "해리 포터와 혼혈왕자",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 18142
      },
      {
        "adult": false,
        "backdrop_path": "/lUPz9zW0uf0bHfYsRRID8RtBHEU.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 457232,
        "original_language": "en",
        "original_title": "Lamborghini: The Man Behind the Legend",
        "overview": "2차 세계대전이 종식된 후 고향으로 돌아온 ‘페루치오 람보르기니’  그는 트랙터 회사를 세워 자신의 이름을 널리 알리겠다는 야망을 품고있다.  타협 없는 노력 끝에 결국 트랙터 개발에 성공하였지만, 그의 꿈은 여기서 멈추지 않는다.  페루치오는 동경하는 자동차 제조사 회장 ‘엔초 페라리’를 찾아가 동업을 제안하지만,  시골 촌놈 취급을 받으며 거절당하는 굴욕을 당한다. 이에 격분한 페루치오는 업계에서 유능하다고 알려진 자동차 엔지니어를 스카우트하며, 황소같이 강력한 차를 만들기위해 의기투합한다. 제네바 모터쇼까지 6개월밖에 남지 않은 상황에서 페루치오는 정말 세상에 선보인 적 없던 최고의 차를 만들어 낼 수 있을까?",
        "popularity": 82.676,
        "poster_path": "/1z6EUqJn07mtfmYGzu8LmHfiOJW.jpg",
        "release_date": "2023-08-23",
        "title": "람보르기니: 전설이 된 남자",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 330
      },
      {
        "adult": false,
        "backdrop_path": "/nV4nOG6ZCK8orRL7T5wXXgMdM0N.jpg",
        "genre_ids": [
          10402,
          35,
          18
        ],
        "id": 1059811,
        "original_language": "en",
        "original_title": "Flora and Son",
        "overview": "젊은 싱글맘 플로라(이브 휴슨)는 우연히 발견한 낡은 어쿠스틱 기타를 아들 맥스(오렌 킨런)에게 선물하지만 반항심 가득한 아들은 이를 거절한다. 직접 기타를 연주해 보기로 마음먹은 플로라, LA의 뮤지션 제프(조셉 고든 레빗)와 가까워지며 본격적인 기타 레슨이 시작된다. 한편, 음악을 알아갈수록 매일매일 새로운 감정도 함께 깨달아 가는 플로라. 어느 날 우연히 맥스가 남몰래 음악을 만들어 왔다는 사실을 알게 되고, 언제나 불협화음이던 아들과의 관계 역시 음악과 함께 점차 변화하기 시작하는데…",
        "popularity": 122.069,
        "poster_path": "/6Lb7OZWCfh9J2Yu9pbq9vkU29hm.jpg",
        "release_date": "2023-09-22",
        "title": "플로라 앤 썬",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 30
      },
      {
        "adult": false,
        "backdrop_path": "/fIQfdZ6fqf9mIbqBaexbgIEIk5K.jpg",
        "genre_ids": [
          35
        ],
        "id": 864168,
        "original_language": "en",
        "original_title": "Joy Ride",
        "overview": "성공 가도를 달리던 알파걸 변호사 '오드리'(애슐리 박)는 초고속 승진을 위해 어릴 적 헤어진 생모를 찾아오라는 황당한 미션을 받는다.  꽃미남 전문가인 음란마귀 아티스트 '롤로'(셰리 콜라), 흑역사 숨기고 할리우드 진출 앞둔 톱배우 '캣'(스테파니 수), 흐린 눈의 케이팝 광인 '데드아이'(사브리나 우)가 합류하면서 네 친구들의 크레이지한 월드투어가 시작된다!  지구 반 바퀴를 돌고 도는 고생길 끝에 밝혀진 오드리의 출생의 비밀은…",
        "popularity": 60.825,
        "poster_path": "/dY2HZ0yAMhYqwHkuKM5HU7zxoJ9.jpg",
        "release_date": "2023-08-30",
        "title": "조이 라이드",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 168
      },
      {
        "adult": false,
        "backdrop_path": "/4osLKux8s7ieEdP9XwmNk446uxm.jpg",
        "genre_ids": [
          28,
          35,
          80,
          53
        ],
        "id": 899112,
        "original_language": "en",
        "original_title": "Violent Night",
        "overview": "크리스마스 이브에 부유한 가정에 침입한 용병들이 가족을 인질로 삼아 많은 돈을 요구하지만, 산타클로스의 등장으로 행복한 크리스마스를 지켜내려는 산타의 활약을 그린 코미디 장르의 액션 영화",
        "popularity": 54.549,
        "poster_path": "/th7vBsAm616HTSqFtxWuZJAmN3E.jpg",
        "release_date": "2023-08-28",
        "title": "바이올런트 나잇",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1596
      }
    ],
    "total_pages": 6,
    "total_results": 101
  }