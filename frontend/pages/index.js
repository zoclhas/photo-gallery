import { Grid, Text } from "@nextui-org/react";

import { ThemeSwitches } from "../components/ThemeSwitcher/ThemeSwitches";

import styles from "../styles/styles.module.css";

export default function Home() {
    return (
        <Grid.Container>
            <Grid sm={2} xs={12} className={styles.profile}>
                <Text h1>
                    Zoc's{" "}
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient:
                                "9deg, $purple600 -20%, $pink600 100%",
                        }}
                        weight="bold"
                    >
                        Photography
                    </Text>
                    Collection
                </Text>
                <ThemeSwitches />
            </Grid>
            <Grid sm={10} xs={12}>
                Nice
            </Grid>
        </Grid.Container>
        // <div>
        //     <h1>Hello World!</h1>
        //     <ThemeSwitches />
        // </div>
    );
}
