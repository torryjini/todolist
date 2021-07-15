const quotes = [
    {
        quote: `"당신의 시간은 한정되어 있습니다. 남의인생을 사는데 시간을 낭비하지 마십시오."`,
        author: "스티브 잡스",
    },
    {
        quote: `"살아가면서 가장 훌륭한 것들은 가장 큰 두려움 바로 뒤편에 있다."`,
        author: "윌 스미스",
    },
    {
        quote: `"많은 인생의 실패자들은 포기할 때 자신이 성공에 얼마나 가까이 있었는지 모른다."`,
        author: "토마스 에디슨",
    },
    {
        quote: `"성공의 8할은 일단 출석하는 것이다."`,
        author: "우디 앨런",
    },
    {
        quote: `"고통은 잠깐이다. 포기는 영원히 남는다."`,
        author: "랜스 암스트롱",
    },
    {
        quote: `"인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다."`,
        author: "알버트 아인슈타인",
    },
    {
        quote: `"앞으로 20년 후에는 당신이 저지른 일보다 당신이 저지르지 않은 일에 더 큰 실망을 하게 될 것이다."`,
        author: "마크 트웨인",
    },
    {
        quote: `"안 하고 죽어도 좋은 일만 내일로 미뤄라."`,
        author: "파블로 피카소",
    },
    {
        quote: `"생각하는 대로 살지 않으면 사는 대로 생각하게 된다."`,
        author: "폴 발레리",
    },
    {
        quote: `"자유는 책임이다. 그래서 대부분의 사람들은 자유를 두려워한다."`,
        author: "조지 버나드 쇼",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;