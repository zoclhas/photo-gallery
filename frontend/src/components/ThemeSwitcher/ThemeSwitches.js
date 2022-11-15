import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch, Card, Spacer, Tooltip } from "@nextui-org/react";

import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { InfoIcon } from "./InfoIcon";

export function ThemeSwitches({ styles }) {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    //Ambient Mode
    const body = document.querySelector("body");
    const ambientSwitch = document.querySelector("#ambient-switch input");
    const ambient = localStorage.getItem("ambient");
    const on__off = document.getElementById("on__off");

    if (!ambient || ambient === "on") {
        localStorage.setItem("ambient", "on");
        ambientModeOn();
    } else {
        ambientModeOff();
    }

    function ambientMode() {
        if (ambientSwitch.checked) {
            ambientModeOn();
        } else {
            ambientModeOff();
        }
    }

    function ambientModeOn() {
        localStorage.setItem("ambient", "on");
        body.setAttribute("ambient-mode", "true");

        setTimeout(() => {
            on__off.innerHTML = "On";
        }, 1);
    }

    function ambientModeOff() {
        localStorage.setItem("ambient", "off");
        body.setAttribute("ambient-mode", "false");

        setTimeout(() => {
            on__off.innerHTML = "Off";
        }, 1);
    }

    return (
        <div className={styles["theme-settings"]}>
            <Card className={styles.theme}>
                <Card.Body
                    css={{
                        height: "5rem",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <span>
                        <strong>Theme:</strong>{" "}
                        {type === "dark" ? "Dark" : "Light"}
                    </span>
                    <Switch
                        color="secondary"
                        checked={isDark}
                        size="xl"
                        iconOff={<SunIcon filled />}
                        iconOn={<MoonIcon filled />}
                        onChange={(e) =>
                            setTheme(e.target.checked ? "dark" : "light")
                        }
                    />
                </Card.Body>
            </Card>
            <Spacer />
            <Card className={styles.theme}>
                <Card.Body
                    css={{
                        height: "5rem",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <Switch
                        checked={ambient === "on"}
                        color="secondary"
                        size="xl"
                        disabled={type === "light"}
                        id="ambient-switch"
                        onChange={() => {
                            ambientMode();
                        }}
                    />
                    <span>
                        <strong>Ambient Mode:</strong>
                        &nbsp;
                        <span id="on__off">On</span>
                    </span>
                    {type === "light" && (
                        <Tooltip
                            content={
                                "Enable dark theme for enabling Ambient Mode."
                            }
                            color="secondary"
                        >
                            <InfoIcon filled />
                        </Tooltip>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}
