// Create an Array of objects of serial killers * 2. Include class, name, image file, bio

var serialKillers = [
        {class: 'aileen-wuornos', name: 'Aileen Wuornos', img: 'images/portraits/aileen-wuornos.jpg', bio: 'Born on February 29, 1956, in Rochester, Michigan, Aileen Wuornos was sexually abused and thrown out of her home as a teen. Having been involved in previous incidents with the law, she made a living as a sex worker on Florida\'s highways, and in 1989 she killed a man who had picked her up. She went on to kill at least five other men and was eventually caught, convicted and placed on death row. Though her sanity was questioned, Wuornos was executed by lethal injection in 2002. In addition to documentaries, books and an opera, her story was depicted in the 2003 film Monster.'},
        {class: 'belle-gunness', name: 'Belle Gunness', img: 'images/portraits/belle-gunness', bio: 'Norwegian born Belle Gunness immigrated to the U.S. in 1881. A series of suspicious fires and deaths (mostly resulting in insurance awards) followed. Belle also began posting notices in lovelorn columns to entice wealthy men to her farm, after which they were never seen again. Authorities eventually found the remains of over 40 victims on her property, but Belle disappeared without a trace.'},
        {class: 'charles-manson', name: 'Charles Manson', img: 'images/portraits/charles-manson.jpg', bio: 'Charles Manson is an American cult leader whose followers carried out several notorious murders in the late 1960s and inspired the book Helter Skelter. Born in Ohio in 1934, Charles Manson is notoriously connected to the brutal slayings of actress Sharon Tate and other Hollywood residents, but he was never actually found guilty of committing the murders himself. However, the famous Tate-La Bianca killings have immortalized him as a living embodiment of evil. Images of his staring "mad eyes" are still used today to illustrate countless serial-murder news stories. The Manson Family—including Charles Manson and his young, loyal dropout disciples of murder—is thought to have carried out some 35 killings. Most were never tried, either for lack of evidence or because the perpetrators were already sentenced to life for the Tate/La Bianca killings. In 2012, Manson was denied parole for the 12th time.'},
        {class: 'david-berkowitz', name: 'David Berkowitz ("Son of Sam")', img: 'images/portraits/david-berkowitz.jpg', bio: 'An American serial killer who murdered six people in New York City in 1976–77, David Berkowitz’s crimes plunged the city into a panic and unleashed one of the largest manhunts in New York history. Known as Son of Sam, Berkowitz was arrested on August 10, 1977, 11 days after his last murder, and was sentenced to 365 years in prison.'},
        {class: 'dennis-rader', name: 'Dennis Rader (The "BTK Killer")', img: 'images/portraits/dennis-rader.jpg', bio: 'Born in 1945 in Pittsburg, Kansas, Dennis Rader committed his first murders in 1974, strangling four members of the Otero family in their home. Later that year he began seeking fame for his killings, writing letters and reporting his crimes. His final crime was in 1991, but he resurfaced in 2004 and again sought media attention. This eventually led to his arrest. He pled guilty and was ordered to serve 10 life sentences in prison.'},
        {class: 'ed-gein', name: 'Ed Gein', img: 'images/portraits/ed-gein.jpg', bio: 'Serial killer Ed Gein was obsessively devoted to his mother, a religious fanatic. After her death, Gein began robbing graves—keeping body parts as trophies, practicing necrophilia, and experimenting with human taxidermy. He then turned to murder, killing at least two women in 1957. Gein inspired film characters Norman Bates (Psycho), Jame Gumb (The Silence of the Lambs) and Leatherface (Texas Chainsaw Massacre).'},
        {class: 'jeffrey-dahmer', name: 'Jeffrey Dahmer', img: 'images/portraits/jeffrey-dahmer.jpg', bio: 'Jeffrey Dahmer was born in Milwaukee on May 21, 1960. He killed his first murder victim, Steven Hicks in 1978. Dahmer killed 17 men in all, molesting some of them, between 1978 to 1991. Once caught, he was sentenced to 15 consecutive life terms in 1992. On November 28, 1994, Dahmer was murdered by fellow prison inmate Christopher Scarver.'},
        {class: 'john-wayne-gacy', name: 'John Wayne Gacy', img: 'images/portraits/john-wayne-gacy.jpg', bio: 'Born on March 17, 1942, in Chicago, Illinois, John Wayne Gacy faced an abusive childhood and conflict over his sexuality. After being convicted of sexual assault in 1968, it was discovered that he had gone on to kill 33 young males, burying most under his home. He was found guilty in 1980 and given multiple death penalty and life sentences. He was executed by lethal injection on May 10, 1994.'},
        {class: 'richard-ramirez', name: 'Richard Ramirez ("Night Stalker")', img: 'images/portraits/richard-ramirez.jpg', bio: 'Born in El Paso, Texas, on February 29, 1960, Richard Ramirez was an American serial killer who over a two-year rampage raped and tortured more than 25 victims and murdered more than a dozen—most of them in their own homes. Dubbed the "Night Stalker," Ramirez was turned on to Satanic worship at an early age by his cousin, a solider who had recently returned from the war in Vietnam. Following a four-year trial, in 1989, Ramirez was convicted of 13 killings. He received the death penalty and was sent to San Quentin Prison in California. He died on June 7, 2013, at age 53.'},
        {class: 'richard-speck', name: 'Richard Speck', img: 'images/portraits/richard-speck.jpg', bio: 'Richard Speck captured the nation\'s attention during the summer of 1966 after murdering eight female students who lived together on Chicago\'s South Side. Before then, he had been responsible for other acts of violence against his family and others but had a knack for escaping the police. After his killing spree in 1966, a manhunt ensued and he was captured two days later. He spent the rest of his life in prison until he died of a heart attack in 1991 at age 49.'},
        {class: 'ted-bundy', name: 'Ted Bundy', img: 'images/portraits/ted-bundy.jpg', bio: 'Ted Bundy was born November 24, 1946, in Burlington, Vermont. In the 1970s, he raped and murdered young women in several states. He was connected to at least 36 murders, but some thought he had committed one hundred or more. He was executed in Florida\'s electric chair in 1989. His charm and intelligence made him something of a celebrity during his trial, and his case inspired many novels and films about serial killers.'},
        {class: 'zodiac-killer', name: 'Unknown (The Zodiac Killer)', img: 'images/portraits/zodiac-killer.jpg', bio: 'The self-proclaimed Zodiac Killer was directly linked to at least five murders in Northern California in 1968 and 1969 and may have been responsible for more. After he taunted police and made threats through letters sent to area newspapers from 1969 to 1974, further communication from him abruptly stopped. Despite an intensive search for the killer and the investigation into numerous suspects, no one was ever arrested for the crimes and the case remains open. The mystery surrounding it has been the subject of countless books and even more theories and has been the inspiration for several movies.'},
        {class: 'aileen-wuornos', name: 'Aileen Wuronos', img: 'images/portraits/aileen-wuornos.jpg', bio: 'Born on February 29, 1956, in Rochester, Michigan, Aileen Wuornos was sexually abused and thrown out of her home as a teen. Having been involved in previous incidents with the law, she made a living as a sex worker on Florida\'s highways, and in 1989 she killed a man who had picked her up. She went on to kill at least five other men and was eventually caught, convicted and placed on death row. Though her sanity was questioned, Wuornos was executed by lethal injection in 2002. In addition to documentaries, books and an opera, her story was depicted in the 2003 film Monster.'},
        {class: 'belle-gunness', name: 'Belle Gunness', img: 'images/portraits/belle-gunness.jpg', bio: 'Norwegian born Belle Gunness immigrated to the U.S. in 1881. A series of suspicious fires and deaths (mostly resulting in insurance awards) followed. Belle also began posting notices in lovelorn columns to entice wealthy men to her farm, after which they were never seen again. Authorities eventually found the remains of over 40 victims on her property, but Belle disappeared without a trace.'},
        {class: 'charles-manson', name: 'Charles Manson', img: 'images/portraits/charles-manson.jpg', bio: 'Charles Manson is an American cult leader whose followers carried out several notorious murders in the late 1960s and inspired the book Helter Skelter. Born in Ohio in 1934, Charles Manson is notoriously connected to the brutal slayings of actress Sharon Tate and other Hollywood residents, but he was never actually found guilty of committing the murders himself. However, the famous Tate-La Bianca killings have immortalized him as a living embodiment of evil. Images of his staring "mad eyes" are still used today to illustrate countless serial-murder news stories. The Manson Family—including Charles Manson and his young, loyal dropout disciples of murder—is thought to have carried out some 35 killings. Most were never tried, either for lack of evidence or because the perpetrators were already sentenced to life for the Tate/La Bianca killings. In 2012, Manson was denied parole for the 12th time.'},
        {class: 'david-berkowitz', name: 'David Berkowitz ("Son of Sam")', img: 'images/portraits/david-berkowitz.jpg', bio: 'An American serial killer who murdered six people in New York City in 1976–77, David Berkowitz’s crimes plunged the city into a panic and unleashed one of the largest manhunts in New York history. Known as Son of Sam, Berkowitz was arrested on August 10, 1977, 11 days after his last murder, and was sentenced to 365 years in prison.'},
        {class: 'dennis-rader', name: 'Dennis Rader (The "BTK Killer")', img: 'images/portraits/dennis-rader.jpg', bio: 'Born in 1945 in Pittsburg, Kansas, Dennis Rader committed his first murders in 1974, strangling four members of the Otero family in their home. Later that year he began seeking fame for his killings, writing letters and reporting his crimes. His final crime was in 1991, but he resurfaced in 2004 and again sought media attention. This eventually led to his arrest. He pled guilty and was ordered to serve 10 life sentences in prison.'},
        {class: 'ed-gein', name: 'Ed Gein', img: 'images/portraits/ed-gein.jpg', bio: 'Serial killer Ed Gein was obsessively devoted to his mother, a religious fanatic. After her death, Gein began robbing graves—keeping body parts as trophies, practicing necrophilia, and experimenting with human taxidermy. He then turned to murder, killing at least two women in 1957. Gein inspired film characters Norman Bates (Psycho), Jame Gumb (The Silence of the Lambs) and Leatherface (Texas Chainsaw Massacre).'},
        {class: 'jeffrey-dahmer', name: 'Jeffrey Dahmer', img: 'images/portraits/jeffrey-dahmer.jpg', bio: 'Jeffrey Dahmer was born in Milwaukee on May 21, 1960. He killed his first murder victim, Steven Hicks in 1978. Dahmer killed 17 men in all, molesting some of them, between 1978 to 1991. Once caught, he was sentenced to 15 consecutive life terms in 1992. On November 28, 1994, Dahmer was murdered by fellow prison inmate Christopher Scarver.'},
        {class: 'john-wayne-gacy', name: 'John Wayne Gacy', img: 'images/portraits/john-wayne-gacy.jpg', bio: 'Born on March 17, 1942, in Chicago, Illinois, John Wayne Gacy faced an abusive childhood and conflict over his sexuality. After being convicted of sexual assault in 1968, it was discovered that he had gone on to kill 33 young males, burying most under his home. He was found guilty in 1980 and given multiple death penalty and life sentences. He was executed by lethal injection on May 10, 1994.'},
        {class: 'richard-ramirez', name: 'Richard Ramirez ("Night Stalker")', img: 'images/portraits/richard-ramirez.jpg', bio: 'Born in El Paso, Texas, on February 29, 1960, Richard Ramirez was an American serial killer who over a two-year rampage raped and tortured more than 25 victims and murdered more than a dozen—most of them in their own homes. Dubbed the "Night Stalker," Ramirez was turned on to Satanic worship at an early age by his cousin, a solider who had recently returned from the war in Vietnam. Following a four-year trial, in 1989, Ramirez was convicted of 13 killings. He received the death penalty and was sent to San Quentin Prison in California. He died on June 7, 2013, at age 53.'},
        {class: 'richard-speck', name: 'Richard Speck', img: 'images/portraits/richard-speck.jpg', bio: 'Richard Speck captured the nation\'s attention during the summer of 1966 after murdering eight female students who lived together on Chicago\'s South Side. Before then, he had been responsible for other acts of violence against his family and others but had a knack for escaping the police. After his killing spree in 1966, a manhunt ensued and he was captured two days later. He spent the rest of his life in prison until he died of a heart attack in 1991 at age 49.'},
        {class: 'ted-bundy', name: 'Ted Bundy', img: 'images/portraits/ted-bundy.jpg', bio: 'Ted Bundy was born November 24, 1946, in Burlington, Vermont. In the 1970s, he raped and murdered young women in several states. He was connected to at least 36 murders, but some thought he had committed one hundred or more. He was executed in Florida\'s electric chair in 1989. His charm and intelligence made him something of a celebrity during his trial, and his case inspired many novels and films about serial killers.'},
        {class: 'zodiac-killer', name: 'Unknown (The Zodiac Killer)', img: 'images/portraits/zodiac-killer.jpg', bio: 'The self-proclaimed Zodiac Killer was directly linked to at least five murders in Northern California in 1968 and 1969 and may have been responsible for more. After he taunted police and made threats through letters sent to area newspapers from 1969 to 1974, further communication from him abruptly stopped. Despite an intensive search for the killer and the investigation into numerous suspects, no one was ever arrested for the crimes and the case remains open. The mystery surrounding it has been the subject of countless books and even more theories and has been the inspiration for several movies.'}
    ],
    
// Shuffles array into random order. (Taken from Yates-Fisher algorithm on stack overflow.)
    shuffle = function (array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
      // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    };

$(function () {

      $board = $('#board');
      $button = $('#new-game');
      $modal = $('#modal');
      $firstDiv = undefined;
      $secondDiv = undefined;
      matchCounter = 0;

  // Start Button should create divs each with the class of the serial killer underneath. Should also be face down. (Iterate through the array and assign index item a div).

  startGame = function () {
    shuffle(serialKillers);
    for (var i = 0; i < serialKillers.length; i++) {
      $('<div></div>').addClass('square ' + serialKillers[i].class + ' covered').on('click', firstClick).appendTo('#board');
    }

  }

  // When click the div should reveal the serial killer underneath.

  firstClick = function (e) {
    $firstDiv = e.target;

    $(e.target).removeClass('covered');
    $('.covered').off('click',firstClick);
    $('.covered').on('click', secondClick);
  };


  // Second click should check if the classes match. If they do a modal should appear containing the blurb about the serial killer. If not both should be rehidden.

  secondClick = function (e) {
    $secondDiv = e.target;

    $(e.target).removeClass('covered');

    if ($firstDiv === $secondDiv) {
      $('.modal').removeClass('hidden');
      matchCounter++;
    } else {
      $firstDiv.addClass('covered');
      $secondDiv.addClass('covered');
    }
    $('.covered').off('click', secondClick);
    $('.covered').on('click', firstClick);
  };

  // Modal should have an x button to close.



  // * Optional Timer, Correct matches counter, If all the board is solved - police modal should show up?



$('#new-game').on('click', startGame);



});