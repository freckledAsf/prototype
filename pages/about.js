import Layout from '@/components/layout.js';
import Block from '@/components/utils/block.js';
import Card from '@/components/utils/card';
import styles from '@/styles/Home2.module.css'

export default function About() {
    return (
        <Layout title="About">
            <Block type="intro" limit="1024">
                <h1>Documentation about geisoft++</h1>
                <p>Short 2 line max description (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus tortor quis sem dignissim lobortis. Nunc varius, est non aliquet molestie, mauris neque pellentesque mi, et porta erat odio eu nibh.)</p>
            </Block>
            <Block type="card" limit="1248">
                <h3>Sources</h3>
                <p>Additional information</p>
                <div className={styles.cards}>
                    <Card 
                        url="https://drive.google.com/file/d/1c0vz17deogPY_0BI3rzK8ctCF0oe74uh/view?usp=share_link" 
                        title="User guide"
                        text="Here you'll find all documentation about the app"
                    />
                    <Card
                        url="https://drive.google.com/file/d/1HO2WGXvHPmuE61_e2I_kiDjIQiJW5dgA/view?usp=share_link"
                        title="Testing app"
                        text="A work on progress, keep up with development trying out the mobile app!"
                    />
                </div>
            </Block>
        </Layout>
    )
}