import Layout from '@/components/layout.js';
import Block from '@/components/utils/block.js';
import Button from '@/components/utils/button.js';
import Card from '@/components/utils/card';
import styles from '@/styles/Home2.module.css'

export default function Home() {
    return (
        <Layout title="Concept Home">
            <Block type="intro" limit="1024">
                <h1>Lorem Ipsum Dolor Sit Amet Abec</h1>
                <p>Short 2 line max description (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus tortor quis sem dignissim lobortis. Nunc varius, est non aliquet molestie, mauris neque pellentesque mi, et porta erat odio eu nibh.)</p>
                <div className={styles.buttons}>
                    <Button url="/dashboard/overview" color="primary" effect="shadow">Start</Button>
                    <Button url="https://drive.google.com/file/d/1c0vz17deogPY_0BI3rzK8ctCF0oe74uh/view?usp=share_link" color="secondary" effect="shadow">Documentation</Button>
                </div>
            </Block>
            <Block type="text" limit="1248">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit ante, posuere eget tincidunt sed, euismod nec eros. Cras sed massa porta, fringilla metus et, sollicitudin nisl. Maecenas hendrerit vel lacus nec consectetur. Aenean maximus id neque id porta. Vestibulum faucibus pulvinar ipsum sit amet egestas. Duis eleifend ante non eleifend ornare. Cras at arcu rhoncus, hendrerit justo non, iaculis eros. Maecenas maximus ipsum non odio pulvinar, quis dapibus turpis pharetra. Ut mollis, velit ornare ornare ultrices, nibh est pellentesque dui, in feugiat velit purus sit amet mauris. Vestibulum a ligula ipsum. Quisque ipsum arcu, tempus non finibus a, porttitor at nisi.</p>
            </Block>
            <Block type="card" limit="1248">
                <h3>Lorem Ipsum Dolor Sit Amet consectetur</h3>
                <p>Lorem Ipsum dolor sit amet consectetur adipsicing elit.</p>
                <div className={styles.cards}>
                    <Card url="#" title="Lorem Ipsum" text="Lorem Ipsum dolor sit amet consectetur adipsicing elit." />
                    <Card url="#" title="Lorem Ipsum" text="Lorem Ipsum dolor sit amet consectetur adipsicing elit." />
                    <Card url="#" title="Lorem Ipsum" text="Lorem Ipsum dolor sit amet consectetur adipsicing elit." />
                    <Card url="#" title="Lorem Ipsum" text="Lorem Ipsum dolor sit amet consectetur adipsicing elit." />
                </div>
            </Block>
        </Layout>
    )
}