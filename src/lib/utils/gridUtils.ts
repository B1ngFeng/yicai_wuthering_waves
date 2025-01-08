import type {Step} from "$lib/types";

export function cloneMatrix(matrix: number[][]): number[][] {
    return matrix.map(row => [...row]);
}

export function matrixToString(matrix: number[][]): string {
    return matrix.map(row => row.join(',')).join(';');
}

export function isGoalState(matrix: number[][], targetColor: number): boolean {
    return matrix.every(row => row.every(cell => cell === targetColor));
}

export function isAllTargetColor(matrix: number[][], targetColor: number): boolean {
    return isGoalState(matrix, targetColor);
}

export function floodFill(currentGrid: number[][], newColor: number, row: number, col: number): number[][] {
    const oldColor = currentGrid[row][col];
    if (oldColor === newColor) return currentGrid;

    const queue: [number, number][] = [[row, col]];
    const visited = Array(currentGrid.length).fill(0).map(() => Array(currentGrid[0].length).fill(false));
    visited[row][col] = true;

    while (queue.length > 0) {
        const [r, c] = queue.shift()!;
        currentGrid[r][c] = newColor;

        const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dr, dc] of directions) {
            const newR = r + dr;
            const newC = c + dc;

            if (
                newR >= 0 &&
                newR < currentGrid.length &&
                newC >= 0 &&
                newC < currentGrid[0].length &&
                !visited[newR][newC] &&
                currentGrid[newR][newC] === oldColor
            ) {
                queue.push([newR, newC]);
                visited[newR][newC] = true;
            }
        }
    }

    return currentGrid;
}

const colorsValue = ['#ffffff', '#4980b9', '#d2463e', '#f5db82', '#59a68d'];
const colorsName = ['空', '蓝', '红', '黄', '绿'];

export function getColors() {
    return colorsValue;
}


export function getColorName(index: number) {
    return colorsName[index];
}

export function getColorsForPicker() {
    return colorsValue.slice(1);
}

export function getDescriptionForSolutionStep(step: Step) {
    return `选择${getColorName(step.A)}色(${step.A}号)，点击${getColorName(step.B)}色方格 (${step.position[0] + 1}, ${step.position[1] + 1})`
}
