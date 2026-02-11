import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ChallengeComponent } from './ChallengeComponent';

describe('ChallengeComponent', () => {
  it('renders three columns', () => {
    render(<ChallengeComponent />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('adds a new item to the Todo column', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    const input = screen.getByPlaceholderText('Add Task');
    const addButton = screen.getByRole('button', { name: '+' });

    await user.type(input, 'Buy groceries');
    await user.click(addButton);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('does not add an item when input is empty', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    const addButton = screen.getByRole('button', { name: '+' });
    await user.click(addButton);

    // No items should appear — just the three column headers
    const arrowButtons = screen.queryAllByRole('button', { name: /Move/ });
    expect(arrowButtons).toHaveLength(0);
  });

  it('moves an item right from Todo to In Progress to Done', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    // Add an item
    await user.type(screen.getByPlaceholderText('Add Task'), 'Task A');
    await user.click(screen.getByRole('button', { name: '+' }));

    // Move right: Todo -> In Progress
    const moveRight = screen.getByLabelText('Move "Task A" right');
    await user.click(moveRight);

    // Item should still be in the DOM
    expect(screen.getByText('Task A')).toBeInTheDocument();

    // Move right again: In Progress -> Done
    await user.click(screen.getByLabelText('Move "Task A" right'));
    expect(screen.getByText('Task A')).toBeInTheDocument();
  });

  it('moves an item left from Done to In Progress to Todo', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    // Add item and move to Done
    await user.type(screen.getByPlaceholderText('Add Task'), 'Task B');
    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByLabelText('Move "Task B" right'));
    await user.click(screen.getByLabelText('Move "Task B" right'));

    // Move left: Done -> In Progress
    await user.click(screen.getByLabelText('Move "Task B" left'));
    expect(screen.getByText('Task B')).toBeInTheDocument();

    // Move left: In Progress -> Todo
    await user.click(screen.getByLabelText('Move "Task B" left'));
    expect(screen.getByText('Task B')).toBeInTheDocument();
  });

  it('disables left arrow button in the first column', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    await user.type(screen.getByPlaceholderText('Add Task'), 'Task C');
    await user.click(screen.getByRole('button', { name: '+' }));

    const moveLeft = screen.getByLabelText('Move "Task C" left');
    expect(moveLeft).toBeDisabled();
  });

  it('disables right arrow button in the last column', async () => {
    const user = userEvent.setup();
    render(<ChallengeComponent />);

    // Add and move to Done
    await user.type(screen.getByPlaceholderText('Add Task'), 'Task D');
    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByLabelText('Move "Task D" right'));
    await user.click(screen.getByLabelText('Move "Task D" right'));

    const moveRight = screen.getByLabelText('Move "Task D" right');
    expect(moveRight).toBeDisabled();
  });
});
