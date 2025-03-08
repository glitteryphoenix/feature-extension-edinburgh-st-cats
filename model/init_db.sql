--
-- Disable foreign key checks while resetting tables
--
SET foreign_key_checks = 0;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS cats;

SET foreign_key_checks = 1;

--
-- Create `cats` Table
--
CREATE TABLE cats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image VARCHAR(500),  -- Store image URLs or file paths
    description TEXT,
    colour TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Create `comments` Table
-- Supports getting and posting comments for a specific cat via /api/comments/cat/:catid

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cat_id INT NOT NULL,  -- Foreign key to cats table
    comment_text TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

--
-- Sample Data for Testing
--
INSERT INTO cats (name, location, image, description, colour)
VALUES 
('Whiskers', 'Old Town', 'https://i.ibb.co/SX9rL4Jg/IMG-20241024-WA0005.jpg', 'This little brown cat loves hanging out by the park, watching the world go by or maybe just bird watching! According to her collar she is called Whiskers.', 'Brown (tabby)'),

('Creepy', 'Leith', 'https://i.ibb.co/nswZXBhy/IMG-20241025-WA0000.jpg', 'Midnight visitor alert! This black and white cat keeps popping up on the outdoor cctv. Who do you belong to, mysterious little kitty?!', 'Black and white (tuxedo)'),

('Toby', 'Stockbridge', 'https://i.ibb.co/kgkXrWbV/IMG-20241029-WA0007.jpg', 'Met the friendliest fluffball today! This cutie practically demanded cuddles. Clearly a professional in the art of charm!', 'Orange and white'),

('Shadow', 'New Town', 'https://i.ibb.co/DnqqB1M/IMG-20241029-WA0008.jpg', 'Morning coffee with a side of cat spotting ☕🐱 This sleek black cat lives opposite the café and always seems to be watching us. Plotting world domination? Or just hoping for a snack?', 'Black'),

('Sushi', 'Morningside', 'https://i.ibb.co/bgcyGjS5/IMG-20250227-WA0037.jpg', 'This sleepy fella keeps coming into our garden for a mid-afternoon snooze. He once stole a piece of my nigiri so we have been calling him sushi.', 'Brown (tabby)'),

('Tulip', 'Portobello', 'https://i.ibb.co/KzKNNtpG/IMG-20250227-WA0035.jpg', "I couldn’t work out why all my flowers were looking squashed but then I caught this little cat having a rest on my tulips!" , "Mixed tri-colour (calico)"),

('Squirrel', 'Southside', 'https://i.ibb.co/6cxF2HT5/IMG-20250227-WA0008.jpg', 'Just thought I would let whoever owns this tuxedo that I caught him trying to chase a squirrel up a tree. He did not succeed!', 'Black and white (tuxedo)'),

('Blondie', 'Tollcross', 'https://i.ibb.co/V06J0ssY/IMG-20250227-WA0026.jpg', 'I keep seeing this fluffy cat rolling around sunbathing 🌤️', 'Orange'),

('Sprinkles', 'Bruntsfield', 'https://i.ibb.co/F4bWTfrk/IMG-20250227-WA0025.jpg', 'This little tuxedo was up on a fence near the grocery store this morning. She was super friendly and came over to me for head scratches. She even rolled over to show her belly! Looks like she`s a neighborhood regular, because a staff member told me her name was Sprinkles🧡', 'Black and white (tuxedo)'),

('Barney', 'South Queensferry', 'https://i.ibb.co/YFpngjjT/download-79.jpg', 'I see this black cat with green eyes almost everyday. Today he was lounging in the sun, totally uninterested in the dogs barking nearby. Very regal, like he knew she owned the place. Definitely a “king of the block” vibe! 👑', 'Black'),

('Sirius', 'Dalry', 'https://i.ibb.co/ZRx7z4Gs/20240715-144033.jpg', 'This fluffy black and white beast is Sirius, and he`s the king of The Swinging Arm! He lives upstairs and is adored by us regulars at the bar.', 'Black and white (tuxedo)'),

('Onyx', 'Gorgie', 'https://i.ibb.co/d08P0zpq/IMG-20250304-WA0005.jpg', 'Shoutout to this fluffy boy that likes to chill in my Grandmas garden. He has stunning pale green eyes and is friendly once he has time to check you out!', 'Black'),

('Salem', 'Corstorphine', 'https://i.ibb.co/JjXdPGMH/IMG-20250304-WA0004.jpg', 'Spotted a sleek, slender black cat in the garden today. It`s clear she has got a mysterious vibe— was just lying low among the flowers, eyes sharp and alert. She seemed kinda shy but I just let her be 🖤', 'Black'),

('Felix', 'Southside', 'https://i.ibb.co/4g9ySQNN/IMG-20250227-WA0015.jpg', 'Stumbled across this cat while at work today, he was very calm & content despite the snow and got some pats from me!', 'Brown'),

('Coco', 'West End', 'https://i.ibb.co/SDPgyVs3/20250116-152245.jpg', 'Meet Coco, the princess of my apartment building. Very sweet, but can be a little bossy when it comes to getting attention. She also doesn not understand privacy as she likes to look into people`s flats through our communal balcony. I think she is convinced she runs the building! 🤣', 'Mixed tri-colour (calico)'),

('Butterfly Chasers', 'Stockbridge', 'https://i.ibb.co/pp0QfSt/IMG-20250227-WA0028.jpg', 'A delightful surprise in the garden today- two cats joined me in soaking up the sun! They seemed to be in their own little world, chasing after a butterfly at one point.', 'Orange and white');


INSERT INTO comments (cat_id, comment_text, author)
VALUES 
(4, 'Ohh I see her on my way home from work. She is shy but definitely loves watching everyone & everything.', 'Lily'),
(9, 'I love tuxedos!', 'Max'),
(11, 'He has been my drinking buddy on many occasions!', 'Oliver'),
(8, 'This is my neighbours cat- a real charmer!', 'Sophia'),
(6, 'Love calicos!', 'Jake'),
(15, 'I can’t get enough of their big, bright eyes!', 'Mia'),
(12, 'Such a sweet cat, they always make me smile when I see him around', 'Lucas'),
(7, 'This cat looks so regal', 'Ella'),
(13, 'I could watch this cat play for hours', 'Ben'),
(15, 'This cat likes to stare in through the balcony doors to my boyfriend`s flat as well! Little peeping tom', 'Ava'),
(10, 'Black cats are the best!!', 'Charlie'),
(16, 'I feel like these two are best friends', 'Amelia'),
(10, 'Barney lives on my street, he comes to visit us and makes my day', 'Leo'),
(5, 'I love the nickname!', 'Chloe'),
(16, 'These are the sweetest pair, always come to say hi when I am in the garden', 'Ethan'),
(2, 'Hahah I love this!', 'Zoe'),
(8, 'I see him around, he is always so chill', 'Lily'),
(2, 'This cat is a real neighborhood star!', 'Max'),
(13, 'He looks just like Jiji from Kiki`s Delivery Service!', 'Oliver'),
(15, 'This cat is such a character, like a little fluffy princess diva! But also kinda creepy, just likes to watch people', 'Sophia'),
(5, 'This fluffy dude visits my garden sometimes too', 'Jake'),
(1, 'I see this cat everyday on my way to work through the park! So friendly', 'Mia'),
(11, 'What a personality on this dude', 'Lucas'),
(14, 'They have such a charming little meow', 'Ella'),
(6, 'I can tell this cat is full of character', 'Ben'),
(9, 'Sprinkles seems like they know they are special <3', 'Ava'),
(16, 'That little face is irresistible!', 'Charlie'),
(4, 'I love black cats!', 'Amelia'),
(3, 'What a cozy little ball of fur!', 'Leo'),
(1, 'This cat has the most beautiful eyes!', 'Chloe');




