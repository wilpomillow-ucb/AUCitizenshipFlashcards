const flashcardContainer = document.getElementById("flashcard-container");

const jsonData = [
    {
        "question": "What is the Australian Citizenship Pledge ",
        "answer": "From this time forward, under God,\nI pledge my loyalty to Australia and its people,\nwhose democratic beliefs I share,\nwhose rights and liberties I respect, and\nwhose laws I will uphold and obey. "
    },
    {
        "question": "Who are Australia\u2019s frst inhabitants?",
        "answer": "Australia's first inhabitants are the Aboriginal and Torres Strait Islander peoples."
    },
    {
        "question": "Where are Aboriginal people historically from?",
        "answer": "Aboriginal people are from mainland Australia and Tasmania"
    },
    {
        "question": "When did the archaeological record suggest that Aboriginal peoples arrived in Australia?",
        "answer": "Archaeological record indicates that Aboriginal peoples arrived in Australia between 65,000 and 40,000 years ago."
    },
    {
        "question": "How do Aboriginal peoples perceive their connection to creation stories and time?",
        "answer": "Aboriginal peoples believe they are central to the creation stories of the land, and their creation stories commence with the beginning of time."
    },
    {
        "question": "Where are Torres Strait Islander people from?",
        "answer": "Torres Strait Islander people are from islands between the northern tip of Queensland and Papua New Guinea."
    },
    {
        "question": "What role do age-old beliefs and traditions play in the lives of Aboriginal and Torres Strait Islander peoples?",
        "answer": "Age-old beliefs and traditions still guide the lives of Aboriginal and Torres Strait Islander peoples today."
    },
    {
        "question": "How is the deep connection of Aboriginal and Torres Strait Islander peoples to the land expressed?",
        "answer": "The deep connection to the land is expressed in their stories, art, and dance."
    },
    {
        "question": " Why are Indigenous cultures considered an important part of Australia's national identity?",
        "answer": "Indigenous cultures are important due to their rich history, unique traditions, and significant contributions to the country's cultural heritage."
    },
    {
        "question": "When did European settlement begin in Australia, and what event marked the beginning?",
        "answer": "European settlement started on 26 January 1788 when the 'First Fleet' of 11 convict ships arrived from Great Britain."
    },
    {
        "question": "Why did the British Government transport convicts to the new colony of New South Wales?",
        "answer": "British laws were harsh, and the jails couldn't hold the large number of people. To address this issue, convicts were transported to the new colony."
    },
    {
        "question": "Who was the first Governor of the colony of New South Wales, and what was his role?",
        "answer": "The first Governor of the colony was Captain Arthur Phillip. His role was to oversee and manage the colony's development."
    },
    {
        "question": "How did the colony of New South Wales grow and develop over time?",
        "answer": "As more convicts and free settlers arrived, the colony grew and developed. Additionally, more colonies were established in various parts of Australia."
    },
    {
        "question": "What major influence did British and Irish heritage have on Australia's history, culture, and politics?",
        "answer": "The British and Irish heritage had a significant influence on Australia's recent history, culture, and politics."
    },
    {
        "question": "What event sparked the 'gold rush' in Australia in 1851, and how did it impact the colonies?",
        "answer": "The 'gold rush' began in 1851 after gold was discovered in the colonies of New South Wales and Victoria. It led to an influx of people from around the world seeking their fortunes."
    },
    {
        "question": "Who were the first large group of migrants not from Europe to arrive in Australia during the gold rush?",
        "answer": "Chinese people were the first large group of migrants not from Europe to arrive in Australia during the gold rush."
    },
    {
        "question": "How did the gold rush impact Australia's population within a span of 10 years?",
        "answer": "Within 10 years of the gold rush, Australia's population more than doubled due to the influx of people seeking gold and opportunities."
    },
    {
        "question": "When did the separate colonies of Australia unite into a federation of states, and what was it called?",
        "answer": "In 1901, the separate colonies were united into a federation of states called the Commonwealth of Australia."
    },
    {
        "question": "What significant democratic institutions were established in Australia in 1901 under the new Australian Constitution?",
        "answer": "Australia's national democratic institutions, including the national parliament, government, and the High Court, were established in 1901 under the new Australian Constitution."
    },
    {
        "question": "What was Australia's population in 1901 when the Commonwealth of Australia was established?",
        "answer": "In 1901, Australia's population was about four million."
    },
    {
        "question": "When were Aboriginal and Torres Strait Islander peoples included in official estimates of the Australian population?",
        "answer": "After a Referendum in 1967, Aboriginal and Torres Strait Islander peoples were included in official estimates of the Australian population."
    },
    {
        "question": "What major migration patterns occurred in the first half of the 20th century?",
        "answer": "Migration levels rose and fell in the first half of the 20th century. There were programs to encourage British migrants to settle in Australia, and a wave of non-British migration followed World War II."
    },
    {
        "question": "Why did large numbers of Europeans come to Australia after World War II?",
        "answer": "After World War II, millions of people in Europe had to leave their homelands, leading to a wave of non-British migration to Australia."
    },
    {
        "question": "What are some reasons why people have migrated to Australia in recent years?",
        "answer": "People have migrated to Australia in recent years to join family, create a new life, or escape poverty, war, or persecution."
    },
    {
        "question": " How has the diversity of Australia's population changed over the last two centuries?",
        "answer": "The diversity of Australia's population has increased over the last two centuries, contributing to a more diverse and prosperous society."
    },
    {
        "question": "What is Australia's national language, and why is it important for migrants to learn and use English?",
        "answer": "Australia's national language is English. Migrants are encouraged to learn and use English to participate effectively in Australian society."
    },
    {
        "question": "What is the significance of the numerous Aboriginal and Torres Strait Islander languages in Australia?",
        "answer": "More than 100 distinct Aboriginal and Torres Strait Islander languages are valued as part of Australia's linguistic and cultural heritage."
    },
    {
        "question": "How many states and territories does Australia have?",
        "answer": "Australia has six states and two mainland territories."
    },
    {
        "question": "Which city is the capital of Australia?",
        "answer": "Canberra is Australia's capital city."
    },
    {
        "question": "Does each state and mainland territory have its own capital?",
        "answer": "Yes, each state and mainland territory in Australia has its own capital."
    },
    {
        "question": "What is the state capital of New South Wales (NSW)",
        "answer": "Sydney"
    },
    {
        "question": "What is the state capital of Victoria (Vic.) ",
        "answer": "Melbourne "
    },
    {
        "question": "What is the state capital of Queensland (Qld) ",
        "answer": "Brisbane"
    },
    {
        "question": "What is the state capital of Western Australia (WA) ",
        "answer": "Perth"
    },
    {
        "question": "What is the state capital of South Australia (SA) ",
        "answer": "Adelaide"
    },
    {
        "question": "What is the state capital of Tasmania (Tas.) ",
        "answer": "Hobart"
    },
    {
        "question": "What is the territory capital of Australian Capital Territory (ACT) ",
        "answer": "Canberra"
    },
    {
        "question": "What is the territory capital of Northern Territory (NT) ",
        "answer": "Darwin"
    },
    {
        "question": "Which was the first British colony established in Australia?",
        "answer": "The first British colony established in Australia was New South Wales."
    },
    {
        "question": "What is the capital city of New South Wales, and what is notable about it?",
        "answer": "Sydney, the capital of New South Wales, is Australia's largest city, home to iconic landmarks like the Sydney Harbour Bridge and Opera House."
    },
    {
        "question": "What is the smallest of the mainland states in Australia?",
        "answer": "Victoria is the smallest of the mainland states."
    },
    {
        "question": "What significant event led to the creation of many fine buildings in Victoria?",
        "answer": "The gold rush of the 1850s led to the creation of many fine buildings in Victoria."
    },
    {
        "question": "What are some of Victoria's notable icons?",
        "answer": "Victoria's icons include the Melbourne Cricket Ground, the 12 Apostles, and the Royal Exhibition Building."
    },
    {
        "question": "Which state in Australia is the second largest in terms of area?",
        "answer": "Queensland is the second largest state in Australia."
    },
    {
        "question": "What is the capital city of Queensland, and what geographical features are significant in the state?",
        "answer": "Queensland's capital is Brisbane, known for the Torres Strait Islands to the north and the Great Barrier Reef along its eastern coast."
    },
    {
        "question": "Describe the landscapes of Queensland.",
        "answer": "Queensland has tropical rainforests, temperate coastal areas, and often dry inland regions."
    },
    {
        "question": "What is the largest state in Australia in terms of area?",
        "answer": "Western Australia is the largest state in Australia."
    },
    {
        "question": "Name the capital city of Western Australia and describe the geographical features of the state.",
        "answer": "Perth is the capital city of Western Australia. The state has a mostly desert eastern region and a rich agricultural and wine-growing area in the south-west. It also hosts significant mining projects."
    },
    {
        "question": "What are some iconic places in Western Australia?",
        "answer": "Western Australia's icons include the Ningaloo Coast, Margaret River, and the Kimberley region."
    },
    {
        "question": "What are some notable characteristics of South Australia?",
        "answer": "South Australia icons include the Barossa Valley and the Flinders Ranges and boasts a rugged coastline, famous wine regions, and Adelaide, its capital, known for colonial architecture."
    },
    {
        "question": "How is Tasmania separated from the mainland, and what is its capital city?",
        "answer": "Tasmania, separated by the Bass Strait, has Hobart as its capital."
    },
    {
        "question": "Describe Tasmania's landscapes.",
        "answer": "Much of Tasmania has unspoilt wilderness landscapes."
    },
    {
        "question": "Name some iconic places in Tasmania.",
        "answer": "Tasmania's icons include Cradle Mountain, Port Arthur, and the Bay of Fires."
    },
    {
        "question": "Where is the Australian Capital Territory located, and what city is situated there?",
        "answer": "The Australian Capital Territory, situated between Sydney and Melbourne, houses the city of Canberra."
    },
    {
        "question": "Which national institutions can be found in Canberra, the capital city of the Australian Capital Territory?",
        "answer": "Several national institutions are located in Canberra, including Parliament House and the High Court of Australia."
    },
    {
        "question": "What are some notable geographical features of the Northern Territory?",
        "answer": "The Northern Territory has a tropical environment in the north of the state and a dry red desert in the south"
    },
    {
        "question": "What is the capital city of the Northern Territory?",
        "answer": "The capital city of the Northern Territory is Darwin."
    },
    {
        "question": "Name some iconic places associated with the Northern Territory.",
        "answer": "Northern Territory icons include Uluru, Kata Tjuta, and Kings Canyon."
    },
    {
        "question": "What is a \"Welcome to Country\"?",
        "answer": "A cultural practice by Aboriginal or Torres Strait Islander custodians welcoming visitors to their traditional land."
    },
    {
        "question": "What was the traditional purpose of a \"Welcome to Country\"?",
        "answer": "The traditional purpose of a \"Welcome to Country\" was to ensure that visitors had a safe and protected journey during their time on that land."
    },
    {
        "question": "In what forms can a \"Welcome to Country\" take place?",
        "answer": "A \"Welcome to Country\" can take place through various forms, including songs, dances, smoking ceremonies, or speeches in traditional language or English"
    },
    {
        "question": "When is a \"Welcome to Country\" typically performed during an event?",
        "answer": "A \"Welcome to Country\" is usually the first item of proceedings to open an event."
    },
    {
        "question": "What is an \"Acknowledgement of Country\"?",
        "answer": "An opportunity to acknowledge that the gathering is on Indigenous land, showing respect to Traditional Custodians, including past and present Elders, and recognizing Indigenous attendees."
    },
    {
        "question": "When is an \"Acknowledgement of Country\" typically delivered during events?",
        "answer": "An \"Acknowledgement of Country\" is usually delivered as part of the Welcome and Housekeeping at meetings and events."
    },
    {
        "question": "Who can deliver an \"Acknowledgement of Country\"?",
        "answer": "Anyone can give an 'Acknowledgement of Country,' but typically, it's the Chair or Master of Ceremonies who does so in meetings or events."
    },
    {
        "question": "What is the purpose of these practices?",
        "answer": "These practices are performed to show respect for Aboriginal and Torres Strait Islander peoples, acknowledge their connection to the land, and pay homage to their cultural heritage."
    },
    {
        "question": "When is Australia Day celebrated each year?",
        "answer": "Australia Day is celebrated on 26 January every year."
    },
    {
        "question": "Is Australia Day a public holiday?",
        "answer": "Australia Day is a public holiday in every state and territory in Australia."
    },
    {
        "question": "What event does Australia Day commemorate?",
        "answer": "Australia Day marks the 1788 arrival of the First Fleet from Britain."
    },
    {
        "question": "How do communities across Australia typically observe Australia Day?",
        "answer": "On Australia Day, communities reflect on the nation's history and contributions to shared achievements."
    },
    {
        "question": "What is the significance of Australia Day as a public holiday?",
        "answer": "Australia Day is the largest annual public holiday, celebrating every Australian's contribution to the dynamic nation."
    },
    {
        "question": "Who does Australia Day celebrate and acknowledge?",
        "answer": "Celebrates and acknowledges the contributions of all Australians, spanning from Indigenous communities with a 65,000-year history to multi-generational residents and newcomers."
    },
    {
        "question": "How is Australia Day marked across the country?",
        "answer": "Australia Day features nationwide events, including citizenship ceremonies."
    },
    {
        "question": "What special event takes place during Australia Day celebrations in Canberra?",
        "answer": "The Prime Minister announces the Australian of the Year Awards in Canberra."
    },
    {
        "question": "When is Anzac Day commemorated each year?",
        "answer": "Anzac Day is commemorated on 25 April every year."
    },
    {
        "question": "Why is Anzac Day named after the Anzacs?",
        "answer": "Anzac Day is named after the Australian and New Zealand Army Corps, which landed at Gallipoli in T\u00fcrkiye during World War I on 25 April 1915."
    },
    {
        "question": "How is Anzac Day observed?",
        "answer": "A solemn day to remember the sacrifice of those who served and died in wars and conflicts."
    },
    {
        "question": "Besides remembering those who served and died, what else does Anzac Day honor?",
        "answer": "Anzac Day also honors the courage and commitment of all servicemen and women who have served the country."
    },
    {
        "question": "What are the colors of the Australian National Flag?",
        "answer": "The Australian National Flag features the colors blue, white, and red."
    },
    {
        "question": "What is located in the top left corner of the Australian National Flag, and what does it represent?",
        "answer": "The 'Union Jack,' representing British settlement and its legacy, is in the top left corner of Australia's flag."
    },
    {
        "question": "What is located just under the Union Jack on the Australian National Flag, and what does it symbolize?",
        "answer": "The Commonwealth Star, which has seven points, is located just under the Union Jack. Each of its points represents one of the six states and one point represents the territories of Australia."
    },
    {
        "question": "What is depicted on the right side of the Australian National Flag?",
        "answer": "On the right side of the flag, there is the Southern Cross, which is a group of stars visible in the southern sky."
    },
    {
        "question": "What are the colors of the Australian Aboriginal Flag?",
        "answer": "The Australian Aboriginal Flag features the colors black, red, and yellow."
    },
    {
        "question": " What does the black color at the top half of the Australian Aboriginal Flag represent?",
        "answer": "The black color at the top half represents the Aboriginal peoples of Australia."
    },
    {
        "question": "What is symbolized by the red color at the bottom half of the Australian Aboriginal Flag?",
        "answer": "The red color at the bottom half of the flag represents the earth, which holds ceremonial significance."
    },
    {
        "question": "What does the yellow circle on the Australian Aboriginal Flag represent?",
        "answer": "The yellow circle on the flag represents the sun."
    },
    {
        "question": "What are the colors of the Torres Strait Islander Flag?",
        "answer": "The Torres Strait Islander Flag features the colors green, blue, black, and white."
    },
    {
        "question": "What do the green stripes on the Torres Strait Islander Flag symbolize?",
        "answer": "The green stripes on the flag represent the land."
    },
    {
        "question": "What does the blue panel in the center of the Torres Strait Islander Flag represent?",
        "answer": "The blue panel in the center of the flag represents the sea."
    },
    {
        "question": "What is the significance of the black lines on the Torres Strait Islander Flag?",
        "answer": "The black lines represent the Torres Strait Islander people."
    },
    {
        "question": "What does the white dancer's headdress in the center of the Torres Strait Islander Flag symbolize?",
        "answer": "The white dancer's headdress is a symbol for all Torres Strait Islanders."
    },
    {
        "question": "What do the points of the white star on the Torres Strait Islander Flag represent?",
        "answer": "The points of the white star represent the island groups in the Torres Strait."
    },
    {
        "question": "What does the color white symbolize on the Torres Strait Islander Flag?",
        "answer": "The color white symbolizes peace on the Torres Strait Islander Flag."
    },
    {
        "question": "What does the Commonwealth Coat of Arms represent?",
        "answer": "The official symbol of the Commonwealth of Australia, signifying national unity and governmental authority."
    },
    {
        "question": "What does the shield in the center of the Commonwealth Coat of Arms symbolize?",
        "answer": "The shield in the center represents the six states of Australia and their federation."
    },
    {
        "question": "Which native Australian animals support the shield on each side of the Commonwealth Coat of Arms?",
        "answer": "A kangaroo and an emu, both native Australian animals, support the shield on each side."
    },
    {
        "question": "What is located above the shield on the Commonwealth Coat of Arms?",
        "answer": "Above the shield, there is a gold Commonwealth Star."
    },
    {
        "question": "What serves as the background of the Commonwealth Coat of Arms?",
        "answer": "The background is the golden wattle, which is Australia's national flower."
    },
    {
        "question": "What is Australia's national flower?",
        "answer": "Australia's national flower is the golden wattle."
    },
    {
        "question": "Where does the golden wattle tree primarily grow in Australia?",
        "answer": "The golden wattle tree grows mainly in south-eastern Australia."
    },
    {
        "question": "How does the golden wattle tree look during spring?",
        "answer": "During spring, the golden wattle tree features bright green leaves and numerous golden yellow flowers."
    },
    {
        "question": "What is unique about the floral emblems of the states and territories of Australia?",
        "answer": "Each of the states and territories of Australia has its own distinct floral emblem."
    },
    {
        "question": " What are Australia's national colours?",
        "answer": "Australia's national colours are green and gold, which are the colours of the golden wattle."
    },
    {
        "question": "In what context are the national colours of green and gold commonly seen?",
        "answer": "The uniforms of Australia's national sports teams are typically in green and gold."
    },
    {
        "question": "What is Australia's national gemstone?",
        "answer": "Australia's national gemstone is the opal."
    },
    {
        "question": " What is the origin of the opal's colors according to Aboriginal legend?",
        "answer": "According to Aboriginal legend, the colors of the opal were created when a rainbow touched the earth."
    },
    {
        "question": "What type of government does Australia have?",
        "answer": "Australia has a parliamentary democracy government system."
    },
    {
        "question": "Where does the power of the government in Australia come from?",
        "answer": "In Australia, government power stems from the people who elect representatives to parliament."
    },
    {
        "question": "How do representatives in the Australian parliament remain accountable to the people?",
        "answer": "Representatives in the Australian parliament are accountable to the people through elections, where they must answer for the decisions they make."
    },
    {
        "question": "What does the Rule of Law signify?",
        "answer": "The Rule of Law means that no person, group, or religious entity is exempt from the law's jurisdiction. Everyone, regardless of their position, must adhere to Australia's laws."
    },
    {
        "question": "Who is required to obey Australia's laws?",
        "answer": "The Rule of Law applies universally, encompassing government officials, community leaders, religious figures, business individuals, and law enforcement in Australia."
    },
    {
        "question": "What is the general sentiment of Australians regarding their country?",
        "answer": "Australians take pride in residing in a peaceful country with a stable system of government."
    },
    {
        "question": "How do Australians believe change should be brought about?",
        "answer": "Australians believe that change should be pursued through methods such as discussion, peaceful persuasion, and adherence to the democratic process."
    },
    {
        "question": "How does the Australian approach to change differ from violent means?",
        "answer": "Australians reject violence as a means to change either an individual's perspective or the law."
    },
    {
        "question": "What principle is the foundation of Australia's democratic system?",
        "answer": "Australia's democratic system is grounded in the principle that every individual, regardless of their background, possesses rights and equality under Australian law."
    },
    {
        "question": "How are Australians expected to treat each other?",
        "answer": "Australians are expected to treat each other with dignity and respect, regardless of factors like race, gender, orientation, age, disability, heritage, politics, wealth, or religion."
    },
    {
        "question": "What does freedom of speech represent in Australia?",
        "answer": "Freedom of speech is a core Australian value that underpins our democracy, allowing people to openly express their thoughts and engage in discussions."
    },
    {
        "question": "What does freedom of speech allow individuals to do?",
        "answer": "Freedom of speech allows individuals to voice their opinions, share their thoughts through speech and writing, and engage in dialogue with others."
    },
    {
        "question": "How does freedom of speech enable people to interact with the government?",
        "answer": "Freedom of speech permits criticism, peaceful protests, and advocating for legal changes against the government, as long as they are abiding by Australian laws."
    },
    {
        "question": "What does freedom of expression encompass?",
        "answer": "Freedom of expression encompasses the ability to express views through various forms, including art, film, music, and literature."
    },
    {
        "question": "What kind of discussions can individuals have under freedom of speech?",
        "answer": "People are free to engage in social or political discussions in public or private settings."
    },
    {
        "question": "Are there any limitations to freedom of speech and expression?",
        "answer": "Yes, even while exercising freedom of speech and expression, individuals must always abide by Australian laws. It's also important to respect the freedom of speech and expression of others."
    },
    {
        "question": "What is meant by freedom of association in Australia?",
        "answer": "Freedom of association refers to the right to form and join associations with shared objectives."
    },
    {
        "question": "How does freedom of association manifest in Australia?",
        "answer": "Australians have the freedom to join or not join legal organizations, including political parties, trade unions, and social groups, without compulsion."
    },
    {
        "question": "What does freedom of association allow Australians to do?",
        "answer": "Australians have the liberty to assemble with others to protest against government actions or organizational decisions."
    },
    {
        "question": "Are there any limitations to freedom of association?",
        "answer": "While exercising freedom of association, individuals must abide by Australian laws, ensuring peaceful gatherings without harm to people or property."
    },
    {
        "question": "What is Australia's religious heritage?",
        "answer": "Australia has a Judaeo-Christian heritage, and while many Australians identify as Christians, the country is home to people practicing various religions."
    },
    {
        "question": "What public holidays are observed in Australia due to its Christian heritage?",
        "answer": "Australia observes public holidays on Christian days like Good Friday, Easter Sunday, and Christmas Day."
    },
    {
        "question": "How does the Australian government treat its citizens in terms of religion?",
        "answer": "The government treats all citizens equally, irrespective of their religion or beliefs. Australia's government is secular, operating independently from religious entities."
    },
    {
        "question": "Does Australia have an official national religion?",
        "answer": "Australia does not have an official national religion, and individuals are free to follow any religion or choose not to follow any."
    },
    {
        "question": "What principle prevails when there is a conflict between an Australian law and a religious practice?",
        "answer": "In case of a conflict between an Australian law and a religious practice, Australian law takes precedence."
    },
    {
        "question": "Are there any limitations even when engaging in religious practices?",
        "answer": "Yes, even while practicing one's religion, individuals must adhere to Australian laws."
    },
    {
        "question": "Do men and women have equal rights in Australia?",
        "answer": "Yes, men and women have equal rights in Australia."
    },
    {
        "question": "What does the law say about discriminating based on gender?",
        "answer": "It is against the law in Australia to discriminate against a person based on their gender."
    },
    {
        "question": "What do Australians value in their society?",
        "answer": "Australians value equal opportunity in their society, often referred to as a 'fair go'."
    },
    {
        "question": " What does the concept of a 'fair go' mean?",
        "answer": "In Australia, the 'fair go' concept means that individuals' success should stem from their talents, hard work, and effort, rather than their wealth or background."
    },
    {
        "question": "What is the purpose of emphasizing equal opportunity and a 'fair go'?",
        "answer": "Emphasizing equal opportunity and a 'fair go' aims to ensure that there are no formal class distinctions in Australian society."
    },
    {
        "question": ": What are the responsibilities of an Australian citizen?",
        "answer": "As an Australian citizen, you have several responsibilities, including obeying the laws of Australia."
    },
    {
        "question": "What are the voting obligations for Australian citizens?",
        "answer": "Australian citizens are required to vote in federal and state or territory elections, as well as in referendums."
    },
    {
        "question": "What is the expectation related to defending Australia for Australian citizens?",
        "answer": "Australian citizens are expected to defend Australia if the need arises."
    },
    {
        "question": "Are Australian citizens required to serve on a jury?",
        "answer": "Yes, Australian citizens may be called upon to serve on a jury if required to do so."
    },
    {
        "question": "What voting rights do Australian citizens have?",
        "answer": "Australian citizens can vote in both federal and state or territory elections, as well as in referendums."
    },
    {
        "question": "How can Australian citizens help their children born overseas become citizens?",
        "answer": "Australian citizens can apply for their children born overseas to become Australian citizens by descent."
    },
    {
        "question": "What job opportunities are available to Australian citizens?",
        "answer": "Australian citizens can apply for jobs in the Australian Public Service or in the Australian Defence Force."
    },
    {
        "question": "Are Australian citizens eligible to seek election to parliament?",
        "answer": "Yes, Australian citizens can seek election to parliament."
    },
    {
        "question": " How can Australian citizens travel internationally?",
        "answer": "Australian citizens can apply for an Australian passport and freely re-enter Australia."
    },
    {
        "question": "What assistance can Australian citizens get while overseas?",
        "answer": "Australian citizens can request consular assistance from an Australian official while abroad."
    },
    {
        "question": "What is the expectation regarding obeying laws in Australia?",
        "answer": " It is an expectation that all individuals in Australia, including Australian citizens and others, obey the laws of the country."
    },
    {
        "question": " Why are laws made by representatives in government?",
        "answer": "Laws are crafted by government representatives to ensure the preservation of an orderly, free, and safe society, as well as to safeguard individual rights."
    },
    {
        "question": " What is the purpose of obeying laws?",
        "answer": "Obeying laws in Australia is essential for maintaining societal order, promoting freedom, and ensuring safety."
    },
    {
        "question": "Who has the right to vote in Australia?",
        "answer": "All Australian citizens aged 18 years or older have the responsibility, right, and privilege to vote."
    },
    {
        "question": "All Australian citizens aged 18 years or older have the responsibility, right, and privilege to vote.",
        "answer": "Australian citizens aged 18 years or older are responsible for voting in federal and state or territory elections, as well as in referendums."
    },
    {
        "question": "What is the significance of voting for Australian citizens?",
        "answer": "By voting, Australian citizens contribute to how Australia is governed and have a say in shaping the country's future."
    },
    {
        "question": "Is voting compulsory in Australia?",
        "answer": "Yes, voting is compulsory in federal and state or territory elections. However, in some states, voting may not be compulsory in local government elections."
    },
    {
        "question": "Who is responsible for jury service in Australia?",
        "answer": "Australian citizens aged 18 years or over have the responsibility for jury service if requested."
    },
    {
        "question": "What is a jury's role in a court case?",
        "answer": "A jury is a group of ordinary Australian men and women who listen to the evidence presented in a court case and determine whether a person is guilty or not guilty."
    },
    {
        "question": "Who can be called for jury service?",
        "answer": "Australian citizens who are on the electoral roll may be called to serve on a jury."
    },
    {
        "question": "Who is eligible to seek election to parliament in Australia?",
        "answer": "Australian citizens aged 18 years or over, who are not dual citizens, are eligible to seek election to parliament at the federal, state, or territory level."
    },
    {
        "question": "How can an Australian citizen receive assistance while overseas?",
        "answer": "When abroad, you can seek help from Australian government officials at embassies, high commissions, or consulates, who provide assistance during emergencies, unrest, disasters, and other times of need."
    },
    {
        "question": " What types of assistance can Australian officials provide to citizens overseas?",
        "answer": "Australian officials overseas can assist with emergency passports, offer advice and support in cases of accidents, serious illnesses, or death."
    },
    {
        "question": "Can Australian citizens apply for their overseas-born children to become citizens?",
        "answer": " Yes, Australian citizens can apply for their child born overseas to become an Australian citizen by descent."
    },
    {
        "question": "How does Australia encourage citizens to participate in society?",
        "answer": "Australia encourages citizens to actively engage in society, taking on the responsibility and privilege of shaping the country's future."
    },
    {
        "question": "What are examples of ways citizens can actively participate in society?",
        "answer": "Active citizens can join local community organizations, volunteer for social and community work, become part of arts or cultural groups, and actively engage in political life."
    },
    {
        "question": "Why is paying taxes important for Australian citizens?",
        "answer": "Working and paying taxes help citizens support the government in providing vital services that contribute to Australia's peace and prosperity."
    },
    {
        "question": "What does tax contribute to in Australia?",
        "answer": "Taxes are crucial for providing services like government-funded healthcare and education, defense, transportation infrastructure (roads and railways), and social security."
    },
    {
        "question": "What is the role of the Australian Electoral Commission (AEC)?",
        "answer": "The Australian Electoral Commission (AEC) independently organizes federal elections, referendums, and maintains the electoral roll, free from political party or government influence."
    },
    {
        "question": "How does the AEC ensure the secrecy of voting?",
        "answer": "In Australia, elections feature a secret ballot, allowing you to freely and safely vote for any candidate, with your choice remaining confidential unless you choose to disclose it."
    },
    {
        "question": "What happens if someone doesn't vote in an election without a valid reason?",
        "answer": "Compulsory voting in Australia requires citizens to vote, or they may face fines. This system ensures everyone has a say in selecting their parliamentary representatives."
    },
    {
        "question": "How can Australian citizens voice their concerns about government policy?",
        "answer": "Australian citizens have the ability to contact their elected representative to express their concerns regarding government policy."
    },
    {
        "question": "What is the purpose of citizens contacting their elected representative?",
        "answer": "By contacting their elected representative, citizens contribute to shaping laws and policies of the government. This ensures that all Australians can have a role in the governance process."
    },
    {
        "question": "What was the state of Australia before 1901?",
        "answer": "Before 1901, Australia was comprised of six separate, self-governing British colonies."
    },
    {
        "question": "What challenges did the separate colonies face?",
        "answer": "The separate colonies encountered challenges such as expensive and slow trade and transport between them, difficulties in enforcing laws across borders, and weak defense systems."
    },
    {
        "question": "Why did people want to unite the colonies?",
        "answer": "People wanted to unite the colonies to overcome challenges, foster closer ties, and form a single nation. Additionally, Australia's national identity was gradually taking shape."
    },
    {
        "question": "How did Australia's national identity start to form?",
        "answer": "Australia's national identity began to take shape through representation in international sports, the development of an Australian culture in songs, poems, stories, and art."
    },
    {
        "question": " When did the colonies unite into a federation?",
        "answer": "On 1 January 1901, the separate colonies were united to form the Commonwealth of Australia, a federation of states."
    },
    {
        "question": "What is the Commonwealth of Australia Constitution Act 1900?",
        "answer": "The Commonwealth of Australia Constitution Act 1900, also known as the Australian Constitution, is the legal document that outlines the fundamental rules for governing Australia."
    },
    {
        "question": "How was the Australian Constitution established?",
        "answer": "The Australian Constitution was initially passed as part of a British Act of Parliament in 1900."
    },
    {
        "question": "When did the Australian Constitution come into effect?",
        "answer": "The Australian Constitution came into effect on 1 January 1901, marking the formation of the independent nation of the Commonwealth of Australia."
    },
    {
        "question": "What key bodies did the Australian Constitution establish?",
        "answer": "The Australian Constitution created the Commonwealth Parliament, with a House of Representatives and a Senate, as well as the High Court of Australia, responsible for interpreting and applying the nation's laws."
    },
    {
        "question": "How can the Australian Constitution be amended?",
        "answer": "Australians can amend the Constitution through referendums, like the 1967 one where over 90% voted 'Yes' to include Aboriginal peoples in the Census."
    },
    {
        "question": "What is required for a change to the Australian Constitution in a referendum?",
        "answer": "To change the Australian Constitution via referendum, a 'double majority' is required, meaning a majority of voters in most states and a majority of voters nationwide must approve the change."
    },
    {
        "question": "How does the Australian Constitution distribute governmental power?",
        "answer": "The Australian Constitution splits power among three branches: legislative (Parliament), executive (Prime Minister and Cabinet), and judicial (judges), preventing power concentration."
    },
    {
        "question": "What is legislative power in the Australian government?",
        "answer": "Legislative power in Australia, held by Parliament, involves creating and changing laws through elected representatives chosen by the people."
    },
    {
        "question": "What is executive power in the Australian government?",
        "answer": "Executive power involves executing laws. The Executive branch includes the Prime Minister, government ministers, and the Governor-General. Ministers oversee government departments responsible for implementing laws."
    },
    {
        "question": "What is judicial power in the Australian government?",
        "answer": "Judicial power entails interpreting and applying the law. Judges hold the authority to interpret laws and ensure their application. Courts and judges operate independently from Parliament and the government."
    },
    {
        "question": "Who is Australia's Head of State?",
        "answer": "Australia's Head of State is the King of Australia, currently His Majesty King Charles III."
    },
    {
        "question": "How is the Governor-General appointed?",
        "answer": "The King of Australia appoints the Governor-General as his representative in Australia, following advice from the Australian Prime Minister."
    },
    {
        "question": "What is the role of the Governor-General?",
        "answer": "The Governor-General operates independently of political parties and serves as the King's representative. Their role is distinct from day-to-day government operations."
    },
    {
        "question": "Does the King have an active role in the Australian government?",
        "answer": "No, the King of Australia does not have a day-to-day role in the Australian government."
    },
    {
        "question": "What is the role of state governors in Australia?",
        "answer": "In each state, a governor represents the King in a role similar to that of the Governor-General on a state level."
    },
    {
        "question": "What type of government is Australia?",
        "answer": "Australia is a constitutional monarchy, with the King as Head of State, but the Constitution binds his powers. As the King doesn't reside in Australia, the Governor-General exercises these powers."
    },
    {
        "question": "How does the King's role relate to Australia's Constitution?",
        "answer": "The King's actions must align with the Constitution, which guides his authority as Head of State within Australia."
    },
    {
        "question": "Who carries out the King's powers in Australia?",
        "answer": "The Governor-General in Australia carries out the powers of the King since he doesn't reside in the country."
    },
    {
        "question": "How does Australia's political system function?",
        "answer": "Australia's political system is a blend of British and North American influences, creating a distinctive Australian model. It is based on a parliamentary democracy."
    },
    {
        "question": "Who leads the Australian Government?",
        "answer": "The leader of the Australian Government is the Prime Minister"
    },
    {
        "question": "Is the Governor-General part of the government in Australia?",
        "answer": "No, the Governor-General is not part of the government and is required to maintain neutrality."
    },
    {
        "question": "What are some key responsibilities of the Governor-General?",
        "answer": "The Governor-General signs bills into law (Royal Assent), handles ceremonial duties, approves government appointments, initiates federal elections, and serves as the Commander-in-Chief of the Australian Defence Force."
    },
    {
        "question": "What are 'reserve powers' of the Governor-General?",
        "answer": "The Governor-General possesses 'reserve powers,' which are special powers that can only be used in specific circumstances."
    },
    {
        "question": "Who is the Head of State of Australia?",
        "answer": "The King of Australia serves as the Head of State."
    },
    {
        "question": "What is the role of the Governor-General?",
        "answer": "The Governor-General is the representative of the Head of State in Australia and carries out various official duties."
    },
    {
        "question": "Who represents the Head of State in each Australian state?",
        "answer": "In each Australian state, a Governor represents the Head of State."
    },
    {
        "question": "Who is the leader of the Australian Government?",
        "answer": "The leader of the Australian Government is the Prime Minister."
    },
    {
        "question": "What is the role of a Premier?",
        "answer": "A Premier is the leader of a state government in Australia."
    },
    {
        "question": "Who leads a territory government in Australia?",
        "answer": "A Chief Minister leads a territory government in Australia."
    },
    {
        "question": "What is a government minister?",
        "answer": "A government minister is a Member of Parliament chosen by a government leader to oversee a specific area of government."
    },
    {
        "question": "What does MP stand for and represent?",
        "answer": "MP stands for Member of Parliament. An MP is an elected representative of the people in the Australian Parliament or a state parliament."
    },
    {
        "question": "What is a Senator?",
        "answer": "A Senator is an elected representative of a state or territory in the Australian Parliament."
    },
    {
        "question": "Who is a Mayor or Shire President?",
        "answer": "A Mayor or Shire President is the leader of a local government."
    },
    {
        "question": "What does a Councillor do?",
        "answer": "A Councillor is an elected member of a local council."
    },
    {
        "question": "What is another name for the Australian Government?",
        "answer": "The Australian Government is also known as the Federal Government or the Commonwealth Government."
    },
    {
        "question": "Who makes up the Australian Government?",
        "answer": "The Australian Government is composed of members of the Australian Parliament, which includes two Houses: the House of Representatives and the Senate."
    },
    {
        "question": "What are the two Houses of the Australian Parliament?",
        "answer": "The two Houses of the Australian Parliament are the House of Representatives and the Senate."
    },
    {
        "question": "How do Australian citizens participate in a federal election?",
        "answer": "In a federal election, Australian citizens have the opportunity to vote for representatives to both the House of Representatives and the Senate in the Australian Parliament."
    },
    {
        "question": "What is the House of Representatives?",
        "answer": "The House of Representatives is one of the two Houses in the Australian Parliament, also known as the Lower House or the People's House"
    },
    {
        "question": "How is Australia divided for representation in the House of Representatives?",
        "answer": "Australia is divided into federal electorates, and Members of Parliament (MPs) represent the people in their respective electorates."
    },
    {
        "question": "How is the number of MPs in the House of Representatives determined?",
        "answer": "The number of MPs for each state and territory is determined based on the population of that state or territory. In total, there are over 150 members elected to the House of Representatives."
    },
    {
        "question": "What is the primary role of the House of Representatives?",
        "answer": "The House of Representatives' main role is to debate, vote on, and discuss proposals for new laws or changes to existing ones, along with national matters of significance."
    },
    {
        "question": "What is the Senate?",
        "answer": "The Senate is the second House in the Australian Parliament, often referred to as the Upper House, the House of Review, or the States' House."
    },
    {
        "question": "How do voters from each state participate in the Senate?",
        "answer": "Voters from each state elect senators to represent them in the Senate. Every state has equal representation in the Senate, regardless of its size or population."
    },
    {
        "question": "How many senators are there in total?",
        "answer": "There is a total of 76 senators. Each state elects 12 senators, while the Australian Capital Territory and the Northern Territory each elect two senators."
    },
    {
        "question": "What are the responsibilities of senators in the Senate?",
        "answer": "Senators in the Senate also participate in considering, debating, and voting on new laws or amendments, and they discuss national matters of importance."
    },
    {
        "question": "What does each state government have?",
        "answer": "Each state government has its own parliament and constitution."
    },
    {
        "question": "Who are the leaders of state and territory governments?",
        "answer": "The leader of a state government is called the Premier, while the leader of a territory government is known as the Chief Minister."
    },
    {
        "question": "What is the role of a Governor in each state?",
        "answer": "In each state, a Governor represents the King of Australia. They hold a ceremonial and representative role."
    },
    {
        "question": "What is the role of an Administrator in the Northern Territory?",
        "answer": "In the Northern Territory, an Administrator is appointed by the Governor-General. Their role is similar to that of a state Governor."
    },
    {
        "question": "What rights do states have according to the Constitution?",
        "answer": "States have rights recognized by the Constitution, which means they possess certain legislative powers and autonomy."
    },
    {
        "question": "How do states and territories differ in terms of lawmaking?",
        "answer": "States have the power to enact laws in their own right. However, self-governing territories' laws can be modified or revoked by the Australian Government."
    },
    {
        "question": "How are representatives elected in state and territory elections?",
        "answer": "Australian citizens vote in state and territory elections to choose representatives who become members of the respective parliament."
    },
    {
        "question": "What are local government areas in Australia?",
        "answer": "Local government areas in Australia are divisions within states and territories, such as cities, shires, towns, or municipalities."
    },
    {
        "question": " What is the role of local councils?",
        "answer": "Local councils are responsible for planning and delivering services to their local communities."
    },
    {
        "question": "How are local councillors elected?",
        "answer": "Citizens in each local government area participate in elections to elect their local councillors."
    },
    {
        "question": "What is the Australian Government is responsible for?",
        "answer": "Taxation, national economic management, immigration and citizenship, employment assistance, postal services and the communications network, social security encompassing pensions and family support, defense, trade and commerce, airports and air safety, and foreign affairs concerning relations with other countries."
    },
    {
        "question": "What are state and territory governments are primarily responsible for?",
        "answer": "Hospitals and health services, schools, roads and railways, forestry, police and ambulance services, and public transport are all essential components of public infrastructure and services."
    },
    {
        "question": "What are local governments (and the Australian Capital Territory Government) are responsible for?",
        "answer": "Street signs and traffic controls, local roads, footpaths, bridges, drains, parks, playgrounds, swimming pools, sports grounds, camping grounds, and caravan parks, food and meat inspection, noise and animal control, rubbish collection, local libraries, halls, and community centers, certain child-care and aged-care issues, building permits, social planning, and local environmental issues are all part of the diverse responsibilities handled by local authorities."
    },
    {
        "question": "What role do political parties play in the way Australia is governed? ",
        "answer": "A political party is a group with shared governance ideas, striving to turn these ideas into laws. Australia's main political parties include the Liberal Party, Australian Labor Party, Nationals, and Australian Greens. Most parliamentarians are party members, while some are independents. Australians are free to join a political party if they wish."
    },
    {
        "question": "How is the Australian Government formed? ",
        "answer": "Following a federal election, the Australian Government is typically led by the party or coalition with the majority in the House of Representatives. Their leader becomes the Prime Minister. The party or coalition with the second-largest representation forms the Opposition, led by the Leader of the Opposition. The Prime Minister recommends House of Representatives or Senators to become government ministers, subject to approval by the Governor-General. Ministers oversee specific government areas, known as portfolios, such as employment, Indigenous Affairs, or the Treasury. The most significant portfolio holders form the Cabinet, the primary decision-making body in government."
    },
    {
        "question": "How are laws made?",
        "answer": "The Australian Parliament can create or modify laws for the nation's benefit. When a member proposes a new law or change, it's called a 'Bill.' Both the House of Representatives and the Senate review, discuss, and vote on the Bill. If most members in each house agree, it goes to the Governor-General, who signs it into law, known as 'Royal Assent.'"
    },
    {
        "question": "What is the nature of the courts in Australia?",
        "answer": "The courts in Australia operate independently and are responsible for administering justice."
    },
    {
        "question": ": What is the primary role of a court in Australia?",
        "answer": "Courts in Australia determine whether a person has violated the law or not and determine appropriate penalties if necessary."
    },
    {
        "question": "How do courts make their decisions?",
        "answer": "Courts base their decisions solely on the evidence presented before them during the legal proceedings."
    },
    {
        "question": "Who holds the highest authority in a court?",
        "answer": "The judge or magistrate is the highest authority in a court, and their decisions are independent and not subject to external influence."
    },
    {
        "question": " How are judges and magistrates appointed?",
        "answer": "Judges and magistrates are appointed by the government, but their positions are secure and cannot be revoked by the government based on disagreements with their decisions."
    },
    {
        "question": "What is the presumption of innocence in Australia's court system?",
        "answer": "In Australia's court system, individuals are presumed innocent until proven guilty in a court of law."
    },
    {
        "question": "Do individuals have the right to legal representation in court?",
        "answer": "Yes, every person has the right to be represented by a lawyer in court proceedings"
    },
    {
        "question": " How is a jury used in Australia's legal system?",
        "answer": "Sometimes, a jury of randomly selected Australian citizens decides if someone broke the law, determining innocence or guilt based on presented evidence."
    },
    {
        "question": "What role does a judge play in a trial involving a jury?",
        "answer": "The judge explains the law to the jury and guides them on legal matters. If the jury finds an individual guilty in a criminal trial, the judge is responsible for determining the appropriate penalty."
    },
    {
        "question": "What is the role of the police in Australia?",
        "answer": "Australian police ensure peace, order, and public safety, protecting lives and property, with the authority to arrest suspected lawbreakers."
    },
    {
        "question": "Are the police independent of the government?",
        "answer": "Yes, the police are independent of the government. They operate separately from political influence and are responsible for enforcing laws impartially."
    },
    {
        "question": "Can the police arrest someone if they believe they have broken the law?",
        "answer": "Yes, if the police believe that someone has broken the law, they have the authority to arrest Ythem and bring them before a court of law."
    },
    {
        "question": "Do the police determine whether a person is guilty or not?",
        "answer": "No, while the police may provide evidence in court, it is the court's responsibility to determine whether a person is guilty or not based on the evidence presented."
    },
    {
        "question": "Are there different police forces in Australia?",
        "answer": "Each state, the Northern Territory, and the national level have their own police forces. States and territories handle crimes under their laws, while the Australian Federal Police (AFP) manage federal law enforcement."
    },
    {
        "question": "What types of crimes does the Australian Federal Police (AFP) handle?",
        "answer": "The AFP investigates federal law violations like drug trafficking, national security offenses, and environmental crimes, as well as general policing duties in the Australian Capital Territory."
    },
    {
        "question": "What is the relationship between the police and the community in Australia?",
        "answer": "In Australia, there's a positive relationship between police and the community. People can report crimes and seek help from local police, creating a sense of community safety and security."
    },
    {
        "question": "Is bribery of the police a crime in Australia?",
        "answer": "Bribing police is a severe offense. Offering or giving a bribe to a police officer is illegal."
    },
    {
        "question": "Is it important to be familiar with the laws in Australia?",
        "answer": "Knowing Australian laws is crucial. Ignorance of the law is not an excuse, and breaking an unfamiliar law can still result in charges."
    },
    {
        "question": "What are some of the most serious crimes in Australia?",
        "answer": "Serious crimes in Australia encompass murder, assault, sexual assault, violence, armed robbery, theft, drug possession, fraud, and dangerous driving."
    },
    {
        "question": "Is violence towards another person considered a serious crime in Australia?",
        "answer": "Indeed, violence against others, including within relationships and marriages (known as domestic or family violence), is illegal and a serious crime in Australia."
    },
    {
        "question": "What is domestic and family violence?",
        "answer": "Domestic and family violence includes controlling behavior, threats, physical harm, isolation, and threats to children or pets within a relationship."
    },
    {
        "question": "Is domestic and family violence accepted in Australia?",
        "answer": "Australia does not tolerate domestic and family violence, and it's illegal. Regardless of gender, those who commit these crimes can be imprisoned."
    },
    {
        "question": "What should you do if you're in danger or know someone who is?",
        "answer": "If in danger, contact the police. For more support and information, visit websites like www.respect.gov.au and www.1800respect.org.au."
    },
    {
        "question": "Who controls road and traffic rules in Australia?",
        "answer": "Road and traffic rules in Australia are controlled by state and territory governments."
    },
    {
        "question": "What can happen if someone breaks traffic laws in Australia?",
        "answer": "People who break traffic laws in Australia can be fined or even sent to prison, depending on the severity of the offense."
    },
    {
        "question": "What do you need to drive a car in Australia?",
        "answer": "To drive a car in Australia, you need a local driver's license, and the car must be registered."
    },
    {
        "question": "Are seatbelts mandatory for everyone in a car?",
        "answer": "Yes, everybody traveling in a car in Australia must wear a seatbelt. Babies and young children must also be secured in an approved car seat."
    },
    {
        "question": "What are some strict traffic laws in Australia?",
        "answer": "Australia has strict traffic laws. It's illegal to drive under the influence of drugs or over the blood alcohol limit, and using a hand-held mobile device while driving is also prohibited."
    },
    {
        "question": "What values are central to the Australian community?",
        "answer": "The values of freedom, respect, fairness, and equality of opportunity are central to the Australian community."
    },
    {
        "question": "How do these values impact the country?",
        "answer": "These values define and shape Australia, making it a secure, prosperous, and peaceful place to live."
    },
    {
        "question": "Why do many people want to become Australian citizens?",
        "answer": "Many people aspire to become Australian citizens because they want to live in a country that upholds and embodies these values."
    },
    {
        "question": "How does Australian citizenship relate to these values?",
        "answer": "Australian citizenship involves living out these values in everyday life and in local communities. Understanding and respecting these values is crucial for all Australian citizens."
    },
    {
        "question": "How are Australians protected by the law?",
        "answer": "Laws and legal systems protect all Australians, contributing to a peaceful and orderly society."
    },
    {
        "question": "How does the Rule of Law promote equality?",
        "answer": "The Rule of Law ensures that everyone is equal under the law, regardless of their background, status, or influence."
    },
    {
        "question": "Why is it important to obey the law?",
        "answer": "Obeying the law is essential for maintaining a just society. Breaking the law can result in penalties, regardless of whether someone is watching."
    },
    {
        "question": "What's the significance of following the law even when no one is watching?",
        "answer": "Upholding the law even when unobserved demonstrates integrity and a commitment to a lawful society, reinforcing the principles of equality and fairness."
    },
    {
        "question": "How do Australian citizens participate in the government?",
        "answer": "Australian citizens are involved in governance by electing representatives to parliament who make decisions on their behalf."
    },
    {
        "question": "What is the source of the government's power?",
        "answer": "The government's power is derived from the Australian people, as citizens vote for representatives to parliament."
    },
    {
        "question": "Why is voting important in Australia?",
        "answer": "Voting is compulsory in Australia, highlighting the significance of participating in elections to shape the nation's future."
    },
    {
        "question": "What does freedom of speech mean in Australia?",
        "answer": "Freedom of speech in Australia allows individuals to express their ideas freely within legal boundaries. This encompasses discussing and sharing thoughts on various topics through various mediums."
    },
    {
        "question": "Can Australians peacefully protest against the government?",
        "answer": "Australians have the right to peaceful protests against government actions, which are an integral part of democracy and allowed within the legal framework."
    },
    {
        "question": "Are there any limitations to freedom of speech in Australia?",
        "answer": "Freedom of speech in Australia has limits. Promoting violence against individuals or groups based on characteristics like culture, ethnicity, religion, or background is illegal. False allegations and inciting lawbreaking are also prohibited."
    },
    {
        "question": "What is freedom of association in Australia?",
        "answer": "Freedom of association in Australia permits individuals to voluntarily join or leave groups within legal boundaries, including organizations like political parties, trade unions, religious groups, and social organizations."
    },
    {
        "question": "Can Australians gather for protests or public demonstrations?",
        "answer": "Australians have the right to protest or assemble, even against government actions or organizational decisions, but these gatherings must be peaceful, not harm people or property, and adhere to the law."
    },
    {
        "question": "What is the stance of Australia on religious freedom?",
        "answer": "Australia respects religious freedom, permitting individuals to choose and practice their faith. There is no official national religion, and the government treats all citizens equally regardless of their religion. However, religious practices must align with Australian laws."
    },
    {
        "question": "Are religious laws legally enforceable in Australia?",
        "answer": "No, religious laws do not hold legal status in Australia. It is Australian law that must be adhered to by all individuals within the country, even if it differs from religious laws."
    },
    {
        "question": "Can individuals practice polygamy or forced marriage in Australia?",
        "answer": "Polygamy (having multiple spouses simultaneously) and forced marriage are illegal in Australia, and involvement in such practices can result in significant legal consequences, including imprisonment."
    },
    {
        "question": "s religious intolerance accepted in Australian society?",
        "answer": "No, religious intolerance is not accepted in Australian society. The country values equal opportunity for all individuals, regardless of their ethnicity or religion. People are encouraged to pursue their goals and interests, provided they are in accordance with Australian law."
    },
    {
        "question": "How does Australian society view the equality of all individuals?",
        "answer": "Australian society highly values the equal rights of all individuals, regardless of factors such as gender, sexual orientation, age, disability, religion, race, or national or ethnic origin."
    },
    {
        "question": "Are there laws in place to protect individuals from discrimination in Australia?",
        "answer": "Australia has enacted laws to prevent unfair treatment based on background, ensuring equal treatment for people from diverse backgrounds under the law."
    },
    {
        "question": "Does Australia provide preferential treatment based on background or beliefs?",
        "answer": "The Australian legal system does not allow preferential treatment based on religion and applies the law uniformly to ensure fairness and equal treatment for all individuals, regardless of their faith."
    },
    {
        "question": "What is the stance of Australian law on marriage?",
        "answer": "Australian law allows two people to marry each other, irrespective of their gender. This means that same-sex marriages are legally recognized in Australia."
    },
    {
        "question": "Do men and women have equal rights in Australia?",
        "answer": "In Australia, both men and women enjoy equal rights. They have equal opportunities for education, employment, political participation, and service in institutions like the Australian Defence Force and the police force."
    },
    {
        "question": "Is gender-based discrimination prohibited in Australia?",
        "answer": "Discrimination based on gender is illegal in Australia, and the legal framework mandates equal treatment for women and men in various aspects, including employment opportunities and society at large."
    },
    {
        "question": "Are individuals selected for jobs solely based on merit in Australia?",
        "answer": "Australia emphasizes merit-based job selection, where qualifications and skills determine placement. Gender discrimination is not allowed, ensuring the most qualified candidate is chosen."
    },
    {
        "question": "What rights do both men and women have in Australia regarding personal matters?",
        "answer": "Both men and women in Australia have the right to make independent choices about personal matters, including decisions related to marriage and religion. They are legally protected from intimidation or violence. Furthermore, any form of physical violence against a spouse or partner is not acceptable and is considered a criminal offense."
    },
    {
        "question": "Is divorce allowed in Australia?",
        "answer": "Divorce is allowed in Australia. Either spouse can apply for divorce in court, even if the other spouse wishes to continue the marriage."
    },
    {
        "question": "What is the principle of a 'fair go' in Australian society?",
        "answer": "The principle of a 'fair go' is deeply ingrained in Australian society. It means that everyone, regardless of their background, should have an equal opportunity to achieve success in life. This principle rejects class distinctions and emphasizes that individuals should not be limited by their gender, wealth, or ethnicity."
    },
    {
        "question": "How does Australia ensure equality of opportunity?",
        "answer": "In Australia, equality of opportunity is promoted by making sure that legal rights are the same for all individuals, regardless of their background. The law supports the selection of individuals for jobs based on their skills and experience, rather than factors like gender, wealth, or ethnicity. This ensures that individuals are given opportunities based on merit."
    },
    {
        "question": "Are migrants in Australia given the opportunity to succeed?",
        "answer": "Many new migrants in Australia have achieved success in various fields like business, the arts, public service, and sports through hard work and enterprise. Australia offers opportunities for migrants to pursue their goals and become leaders in their chosen fields."
    },
    {
        "question": "What does mutual respect and tolerance mean in Australia?",
        "answer": "In Australia, mutual respect and tolerance mean that individuals must respect the freedom and dignity of others, including their opinions and choices. Australians believe in peaceful disagreement and uphold the right of every person to be safe and free from violence and intimidation."
    },
    {
        "question": "Are there strict laws regarding the age of sexual consent in Australia?",
        "answer": "Yes, there are very strict laws in Australia concerning the age of sexual consent. The age of consent is typically 16 or 17, depending on the state or territory in which you reside. For example, it is against the law for a 20-year-old person to have sexual relations with a 15-year-old, as this is illegal in all Australian states and territories."
    },
    {
        "question": "How does Australia view the actions of the police?",
        "answer": "In Australia, public support is expected for lawful police actions, and individuals are encouraged to comply with lawful police requests as part of their commitment to abiding by the law."
    },
    {
        "question": "What values are associated with mutual respect and tolerance in Australia?",
        "answer": "Australia upholds mutual respect and tolerance, which includes listening to others, respecting their views, and being tolerant of differences despite disagreements. Racism, such as creating or sharing racially offensive material and making abusive comments in public or at sporting events, is strongly condemned in the country."
    },
    {
        "question": "What is the expectation from Australian citizens regarding making a contribution to the community?",
        "answer": "Australian citizens are expected to actively engage in the nation's life and community, fulfilling their citizenship duties, including contributing to the community and supporting themselves and their families when capable."
    },
    {
        "question": "How do Australians demonstrate compassion for those in need?",
        "answer": "Australians value 'mateship' and assist each other in times of need. This includes acts like taking meals to elderly neighbors, providing rides to medical appointments, or visiting the sick or lonely. Community service and volunteering are integral to Australia's tradition of mutual support and community strengthening."
    },
    {
        "question": "Why is learning English important for people living in Australia?",
        "answer": "Learning English is considered important in Australia as it is the national language and a unifying element of society. Proficiency in English is essential for various aspects of life, including education, employment, and social integration. It is seen as crucial for economic participation and social cohesion. Applicants for Australian citizenship must commit to making reasonable efforts to learn the English language if it is not their native language."
    },
    {
        "question": "What responsibilities do Australians have to help protect society?",
        "answer": "Australians have a responsibility to protect society. For instance, if someone suspects a friend or neighbor is planning a serious crime, they should promptly report it to government authorities. Likewise, witnessing or knowing about child abuse should be reported to the police for investigation. Australia does not tolerate online or cyber abuse, and many forms of it are illegal."
    },
    {
        "question": "What does loyalty to Australia mean for Australian citizens?",
        "answer": "In the citizenship pledge, Australians pledge loyalty to their country and its people. While dual citizenship is allowed, citizens must always adhere to Australian laws, even when abroad. Loyalty is about shared obligations, including not undermining Australia's interests and security. For instance, actions like sharing government secrets on social media or promoting distrust in ethnic communities can harm community relations and national interests."
    }
];

for (let i = jsonData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [jsonData[i], jsonData[j]] = [jsonData[j], jsonData[i]];
}

jsonData.forEach(item => {
    const card = createFlashcard(item.question, item.answer);
    flashcardContainer.appendChild(card);
});

function createFlashcard(question, answer) {
    const card = document.createElement("div");
    card.classList.add("flashcard");

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.textContent = question;

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = answer;

    card.appendChild(questionElement);
    card.appendChild(answerElement);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    return card;
}