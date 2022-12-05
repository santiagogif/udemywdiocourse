import HomePage from '../pages/home-page.js';
import BlogPage from '../pages/blog-page';

describe('Blog', () => {
    it('Get the list of all recent post & assert the length of each list item', async () => {
        await HomePage.open("/blog");

        //Get the recent Post List Elements
        const recentPostList = await BlogPage.recentPostList;

        //Loop through the list and assert the text length is greater than 10
        for (const item of recentPostList){
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);

        }

        //Assert the total length of the list is 4
        await expect(recentPostList).toHaveLength(5)
    })
})